import classes from './Input.module.css';
import {FC} from "react";

interface InputProps {
    input: {
        id: string,
        type: string,
        min: number,
        max: number,
        step: number,
        defaultValue: number
    },
    lable: string
}

const Input: FC<InputProps> = ({input, lable}) => {
    return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{lable}</label>
            <input {...input}/>
        </div>
    )
}

export default Input;