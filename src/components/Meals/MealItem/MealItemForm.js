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

const MealItemForm = () => {
    return (
        <form className={classes.form}>
            <Input {...INPUT_CONFIG} label="amount" />
            <button>Add</button>
        </form>
    );
};

export default MealItemForm;
