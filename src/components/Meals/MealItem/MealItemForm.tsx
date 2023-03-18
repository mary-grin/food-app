import classes from './MealItemForm.module.css'
import Input from "../../UI/Input";
import {FC, useContext, useRef} from "react";
import {Meal} from "../AvailableMeals";
import cartContext from "../../store/cart-context";

interface MealItemFormProps {
    meal: Meal
}

const MealItemForm: FC<MealItemFormProps> = ({meal}) => {
    const cart = useContext(cartContext);

    const input = useRef(0);

    return (
        <form className={classes.form}>
            <Input
                lable="Amount"
                input={{
                    id: 'amount' + meal.id,
                    type: 'number',
                    min: 1,
                    max: 5,
                    step: 1,
                    defaultValue: 1
                }
            }/>
            <button type="button" onClick={() => cart.addItem({...meal, amount: 0})}>+ Add</button>
        </form>
    )
}

export default MealItemForm;