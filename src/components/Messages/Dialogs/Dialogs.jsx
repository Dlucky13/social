import React from 'react';
import styles from './Dialogs.module.css';
import {actionCreator_addMessage, actionCreator_newMessageInput,} from "../../../pseudoRedux/messagesPage-reducer";


export const AddMessage = (props) => {

    const newMessageInput = (evt) => {
        let text = evt.target.value;
        props.dispatch(actionCreator_newMessageInput(text));
    }

    const addMessage = () => {
        props.dispatch(actionCreator_addMessage());
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