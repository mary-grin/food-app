import meals from '../../assets/meals.jpg'
import classes from './Header.module.css'
import {FC, Fragment} from "react";
import HeaderCardButton from "./HeaderCardButton";

interface HeaderProps {
    openCart: () => void
}

const Header: FC<HeaderProps> = ({openCart}) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCardButton openCart={openCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="meals" />
            </div>
        </Fragment>
    )
}

export default Header