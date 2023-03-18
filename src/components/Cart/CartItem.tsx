import classes from './CartItem.module.css';
import {FC} from "react";

interface CartItemProps {
    name: string,
    price: number,
    amount: number,
    onAdd: () => void,
    onRemove: () => void
}

const CartItem: FC<CartItemProps> = ({name, price, amount, onAdd, onRemove}) => {
    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>${price.toFixed(2)}</span>
                    <span className={classes.amount}>x {amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={onRemove} type="button">−</button>
                <button onClick={onAdd} type="button">+</button>
            </div>
        </li>
    );
};

export default CartItem;