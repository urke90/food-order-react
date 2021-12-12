import React, { Fragment } from 'react';

import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meal App</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="Order your food" />
            </div>
        </Fragment>
    );
};

export default Header;
