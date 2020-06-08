import React from 'react';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={styles.dialog}>
            {props.text}
        </div>
    )
}

export default Dialogs;