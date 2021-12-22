import { useReducer } from 'react';
import CartContext from './cart-context';
import { ADD_ITEM, REMOVE_ITEM } from './constants';

const initState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    let updatedTotalAmount;
    let existingItemIndex;
    let existingItem;
    let updatedItems;
    switch (action.type) {
        case ADD_ITEM:
            updatedTotalAmount =
                state.totalAmount + action.item.price * action.item.amount;

            existingItemIndex = state.items.findIndex(
                (el) => el.id === action.item.id
            );
            existingItem = state.items[existingItemIndex];

            if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount + action.item.amount
                };

                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.item);
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
        case REMOVE_ITEM:
            existingItemIndex = state.items.findIndex(
                (el) => el.id === action.id
            );
            existingItem = state.items[existingItemIndex];
            updatedTotalAmount = state.totalAmount - existingItem.price;

            if (existingItem.amount > 1) {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount - 1
                };
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.filter((el) => el.id !== action.id);
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };
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
