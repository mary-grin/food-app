import {FC} from "react";

import classes from './Cart.module.css'
import Modal from "../UI/Modal";

interface CartProps {
    closeCart: () => void
}

const Cart: FC<CartProps> = ({closeCart}) => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{id: 1, name: 'Sushi', amount: 2, price: 22.99},].map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )

    return (
        <Modal closeCart={closeCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>45.98</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={closeCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;