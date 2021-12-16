import { useContext } from 'react';
import CartContext from '../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ showCartHandler }) => {
    const cartCtx = useContext(CartContext);

    const totalItems = cartCtx.items.reduce(
        (currNum, item) => currNum + item.amount,
        0
    );

    return (
        <button onClick={showCartHandler} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalItems}</span>
        </button>
    );
};

export default HeaderCartButton;
