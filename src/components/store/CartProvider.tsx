import {FC, ReactNode, useReducer} from "react";
import CartContext from "./cart-context";
import {Meal} from "../Meals/AvailableMeals";

export interface MealItems extends Meal {
    amount: number
}

interface CartProviderProps {
    children: ReactNode
}

interface StateReducer {
    items: MealItems[],
    totalAmount: number
}

const defaultCartState = {
    items: [],
    totalAmount: 0
}

export interface Action<T> {
    type: string,
    payload: T
}

const cartReducer = (state: StateReducer, action: Action<any>): StateReducer => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const updatedState = state.items.concat(action.payload)
        }
        case 'REMOVE_FROM_CART':
            return defaultCartState
    }
    return defaultCartState
}

const CartProvider: FC<CartProviderProps> = ({children}) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)

    const appDispatch = (value: Action<T>) => {
        return dispatchCart(value);
    };

    const addItemToCart = (item: Action<MealItems>) => {
        appDispatch({type: 'ADD_TO_CART', payload: item})
    }

    const removeItemFromCart = (id: Action<string>) => {
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