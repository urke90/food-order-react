import classes from './Input.module.css';

const Input = ({ label, ...rest }) => {
    return (
        <div className={classes.input}>
            <label>{label}</label>
            <input {...rest} />
        </div>
    );
};

export default Input;
