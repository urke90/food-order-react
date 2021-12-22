import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef(({ label, ...rest }, ref) => {
    return (
        <div className={classes.input}>
            <label>{label}</label>
            <input ref={ref} {...rest} />
        </div>
    );
});

export default Input;
