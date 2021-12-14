import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = ({ onHideCart }) => {
    const cartItems = [
        { id: 'c1', name: 'sushi', amount: 2, price: 12.99 }
    ].map((item) => <li>item.name</li>);

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onHideCart}>
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;

/*
id: c1, name: sushi, amount: 2 , price 12.99


*/
