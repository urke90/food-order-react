import { useState, useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const INPUT_CONFIG = {
    id: 'amount',
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1'
};

const MealItemForm = ({ onAddToCart }) => {
    const [formIsValid, setFormIsValid] = useState(true);
    const inputAmountRef = useRef();

    const submitHandler = (ev) => {
        ev.preventDefault();

        const amount = +inputAmountRef.current.value;

        if (amount < 0 || amount > 5) {
            setFormIsValid(false);
            return;
        }

        onAddToCart(amount);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={inputAmountRef} {...INPUT_CONFIG} label="amount" />
            <button>Add</button>
            {!formIsValid && <p>Please enter valid amount</p>}
        </form>
    );
};

export default MealItemForm;
