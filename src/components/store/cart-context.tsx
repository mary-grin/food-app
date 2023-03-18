import React from "react";
import {Action, MealItems} from "./CartProvider";

interface CartContext {
    items: MealItems[],
    totalAmount: number,
    addItem: (item: MealItems) => void,
    removeItem: (id: string) => void
}

const CartContext: React.Context<CartContext> = React.createContext<CartContext>({
    items: [],
    totalAmount: 0,
    addItem: (item: MealItems) => {},
    removeItem: (id: string) => {}
})

export default CartContext;