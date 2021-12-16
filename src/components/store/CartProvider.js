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
            const updatedTotalAmount =
                state.totalAmount + item.price * item.amount;

            const existingItemIndex = state.items.findIndex(
                (el) => el.id === item.id
            );
            const existingItem = state.items[existingItemIndex];

            let updatedItems;

            if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount + item.amount
                };

                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(item);
            }

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
