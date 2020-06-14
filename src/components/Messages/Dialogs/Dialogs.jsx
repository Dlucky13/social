import React from 'react';
import styles from './Dialogs.module.css';


export const AddMessage = (props) => {

    const newMessageInput = (evt) => {
        let text = evt.target.value;
        props.newMessageInputCont(text);
    }

    const addMessage = () => {
        props.addMessageCont();
    }

    return (
        <div>
            <textarea onChange={newMessageInput} value={props.addMessageText} />
            <button onClick={addMessage}>Send Message</button>
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={styles.dialog}>
            <div>{props.text}</div>
        </div>
    )
}

export default Dialogs;