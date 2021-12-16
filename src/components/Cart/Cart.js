import { useContext } from 'react';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = ({ onHideCart }) => {
    const cartCtx = useContext(CartContext);
    console.log('cartCtx', cartCtx);

    const addItemToCartHandler = (item) => {};

    const removeItemFromCart = (id) => {
        console.log('removeItemFromCart', id);
    };

    const cartItems = cartCtx.items.map(({ id, name, price, amount }) => (
        <CartItem
            key={id}
            name={name}
            price={price}
            amount={amount}
            onAdd={addItemToCartHandler}
            onRemove={() => removeItemFromCart(id)}
        />
    ));

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = !!cartCtx.items.length;

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onHideCart}>
                    Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;

/*
id: c1, name: sushi, amount: 2 , price 12.99


*/
