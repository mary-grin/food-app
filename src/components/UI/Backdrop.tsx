import {FC} from "react";
import classes from './Modal.module.css';

interface BackdropProps {
    closeCart: () => void
}

const Backdrop: FC<BackdropProps> = ({closeCart}) => {
    return (
        <div className={classes.backdrop} onClick={closeCart}></div>
    )
}

export default Backdrop;