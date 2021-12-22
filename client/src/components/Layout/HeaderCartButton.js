import { useContext, useEffect, useState } from 'react';
import CartContext from '../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ showCartHandler }) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const totalItems = cartCtx.items.reduce(
        (currNum, item) => currNum + item.amount,
        0
    );

    const btnClasses = `${classes.button} ${
        btnIsHighlighted ? classes.bump : ''
    }`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setInterval(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => clearInterval(timer);
    }, [items]);

    return (
        <button onClick={showCartHandler} className={btnClasses}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalItems}</span>
        </button>
    );
};

export default HeaderCartButton;
