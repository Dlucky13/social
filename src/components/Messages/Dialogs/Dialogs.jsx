import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={styles.dialog}>
            <div>{props.text}</div>
        </div>
    )
}

export default Dialogs;