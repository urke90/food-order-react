import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} />;
};

const ModalOverlay = ({ children }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    );
};

const rootElement = document.getElementById('overlays');

const Modal = ({ children }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, rootElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                rootElement
            )}
        </Fragment>
    );
};

export default Modal;
