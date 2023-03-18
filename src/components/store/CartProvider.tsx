import {FC, ReactNode, useReducer} from "react";
import CartContext from "./cart-context";
import {Meal} from "../Meals/AvailableMeals";

export interface MealItems extends Meal {
    amount: number
}

interface CartProviderProps {
    children: ReactNode
}

export interface Action<T> {
    type: string,
    payload: T
}

interface StateReducer {
    items: MealItems[],
    totalAmount: number
}

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state: StateReducer, action: Action<any>): StateReducer => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const updatedAmount = action.payload.amount * action.payload.price + state.totalAmount;

            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            const existingItem = state.items[existingItemIndex];

            let updatedItems;

            if(existingItem) {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount + action.payload.amount
                }
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.payload);
            }

            return {
                items: updatedItems,
                totalAmount: updatedAmount
            }
        }
        case 'REMOVE_FROM_CART': {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload
            );
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingItem.price;
            let updatedItems;
            if (existingItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.payload);
            } else {
                const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
        }
        default: return state
    }
}

const CartProvider: FC<CartProviderProps> = ({children}) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)

    function appDispatch <T = any>(value: Action<T>) {
        return dispatchCart(value);
    };

    function addItemToCart (item: MealItems) {
        appDispatch({type: 'ADD_TO_CART', payload: item})
    }

    function removeItemFromCart (id: string) {
        appDispatch({type: 'REMOVE_FROM_CART', payload: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;