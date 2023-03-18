import {FC, useContext} from "react";

import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import cartContext from "../store/cart-context";
import CartItem from "./CartItem";
import {MealItems} from "../store/CartProvider";

interface CartProps {
    closeCart: () => void
}

const Cart: FC<CartProps> = ({closeCart}) => {
    const cart = useContext(cartContext)
    const totalAmount = cart.totalAmount.toFixed(2);
    const hasItems = cart.items.length > 0;

    const cartAddItem = (item: MealItems) => {
        cart.addItem({...item, amount: 1})
    }

    const cartRemoveItem = (id: string) => {
        cart.removeItem(id)
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cart.items.map(item => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={cartAddItem.bind(null, item)}
                    onRemove={cartRemoveItem.bind(null, item.id)}
                ></CartItem>
            ))}
        </ul>
    )

    return (
        <Modal closeCart={closeCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={closeCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;