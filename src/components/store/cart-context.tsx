import React from "react";
import {Action, MealItems} from "./CartProvider";

interface CartContext {
    items: MealItems[],
    totalAmount: number,
    addItem: (item: Action<MealItems>) => void,
    removeItem: (id: Action<string>) => void
}

const CartContext: React.Context<CartContext> = React.createContext<CartContext>({
    items: [],
    totalAmount: 0,
    addItem: (item: Action<MealItems>) => {},
    removeItem: (id: Action<string>) => {}
})

export default CartContext;