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

    const amountInput = useRef<HTMLInputElement>(null)

    const submitForm = () => {
        const amount = amountInput.current ? +amountInput.current.value : 0;
        if (amount < 1) {
            return
        }

        cart.addItem({...meal, amount})
    }

    return (
        <form className={classes.form}>
            <Input
                label="Amount"
                ref={amountInput}
                input={{
                    id: 'amount' + meal.id,
                    type: 'number',
                    min: 1,
                    max: 5,
                    step: 1,
                    defaultValue: 1
                }
            }/>
            <button onClick={submitForm} type="button">+ Add</button>
        </form>
    )
}

export default MealItemForm;