import CardIcon from "../Cart/CardIcon";
import classes from './HeaderCardButton.module.css'
import {FC, useContext} from "react";
import cartContext from "../store/cart-context";

interface HeaderCardButtonProps {
    openCart: () => void
}

const HeaderCardButton: FC<HeaderCardButtonProps> = ({openCart}) => {
    const cart = useContext(cartContext);

    const cartTotal = cart.items.reduce((acc, item) => {
        return acc + item.amount
    }, 0)

    return (
        <button className={classes.button} onClick={openCart}>
            <span className={classes.icon}>
                <CardIcon />
            </span>
            <span>Your card</span>
            <span className={classes.badge}>{cartTotal}</span>
        </button>
    )
}

export default HeaderCardButton;