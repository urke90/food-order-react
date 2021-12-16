import { useContext } from 'react/cjs/react.development';
import CartContext from '../../store/cart-context';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = ({ id, name, description, price }) => {
    const formatedPrice = `${price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        const itemToAdd = {
            id,
            name,
            amount,
            price
        };

        cartCtx.addItem(itemToAdd);
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{formatedPrice}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;
