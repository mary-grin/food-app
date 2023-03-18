import {FC, Fragment, ReactNode} from "react";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import ReactDOM from "react-dom";

interface ModalProps {
    children: ReactNode,
    closeCart: () => void
}

const portalOverlay: HTMLElement = document.getElementById('overlays')!

const Modal: FC<ModalProps> = ({children, closeCart}) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop closeCart={closeCart}/>, portalOverlay)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalOverlay)}
        </Fragment>
    )
}

export default Modal;