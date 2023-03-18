import classes from './Input.module.css';
import React, {FC, ForwardedRef, LegacyRef} from "react";

interface InputProps {
    input: {
        id: string,
        type: string,
        min: number,
        max: number,
        step: number,
        defaultValue: number
    },
    label: string
}

const Input = React.forwardRef(({input, label}: InputProps, ref:ForwardedRef<HTMLInputElement>) => {
    return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{label}</label>
            <input {...input} ref={ref}/>
        </div>
    )
})



export default Input;