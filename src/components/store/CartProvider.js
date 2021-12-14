import CartContext from './cart-context';

const CartProvider = ({ children }) => {
    const addItemHandler = () => {};

    const removeItemHandler = () => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
