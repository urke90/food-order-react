import { useState } from 'react';

import Header from '../components/Layout/Header';
import Cart from '../components/Cart/Cart';
import Meals from '../components/Meals/Meals';

const HomePage = () => {
    const [modalIsShown, setModalIsShown] = useState(false);

    const showModalHandler = () => {
        setModalIsShown(true);
    };

    const hideModalHandler = () => {
        setModalIsShown(false);
    };
    return (
        <div>
            {modalIsShown && <Cart onHideCart={hideModalHandler} />}
            <Header onShowCart={showModalHandler} />
            <main>
                <Meals />
            </main>
        </div>
    );
};

export default HomePage;
