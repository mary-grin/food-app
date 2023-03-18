import {FC, ReactNode} from "react";
import classes from './Modal.module.css';

interface ModalOverlayProps {
    children: ReactNode
}

const ModalOverlay: FC<ModalOverlayProps> = ({children}) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    )
}

export default ModalOverlay;