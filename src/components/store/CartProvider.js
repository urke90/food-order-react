import { useReducer } from 'react';
import CartContext from './cart-context';
import { ADD_ITEM, REMOVE_ITEM } from './constants';

const initState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, { type, item }) => {
    switch (type) {
        case ADD_ITEM:
            const updatedItems = state.items.concat(item);
            const updatedTotalAmount =
                state.totalAmount + item.price * item.amount;
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
        case REMOVE_ITEM:
            return;
        default:
            return initState;
    }
};

const CartProvider = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initState);

    const addItemHandler = (item) => {
        dispatchCartAction({ type: ADD_ITEM, item });
    };

    const removeItemHandler = (id) => {
        dispatchCartAction({ type: REMOVE_ITEM, id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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
