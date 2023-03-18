import {FC} from "react";
import classes from './MealItem.module.css';
import {Meal} from "../AvailableMeals";
import MealItemForm from "./MealItemForm";

const MealItem: FC<Meal> = ({name, id, description, price}) => {
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>${price.toFixed(2)}</div>
            </div>
            <div>
                <MealItemForm meal={{name, id, description, price}}/>
            </div>
        </li>
    )
}

export default MealItem;