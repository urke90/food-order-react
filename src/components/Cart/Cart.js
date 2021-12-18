import { useContext } from 'react';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = ({ onHideCart }) => {
    const cartCtx = useContext(CartContext);

    const addItemToCartHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const removeItemFromCart = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItems = cartCtx.items.map((item) => {
        return (
            <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onAdd={() => addItemToCartHandler(item)}
                onRemove={() => removeItemFromCart(item.id)}
            />
        );
    });

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
