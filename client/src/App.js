import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvider';

function App() {
    const [modalIsShown, setModalIsShown] = useState(false);

    const showModalHandler = () => {
        setModalIsShown(true);
    };

    const hideModalHandler = () => {
        setModalIsShown(false);
    };

    return (
        <CartProvider>
            {modalIsShown && <Cart onHideCart={hideModalHandler} />}
            <Header onShowCart={showModalHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
