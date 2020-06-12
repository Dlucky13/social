import React from 'react';
import styles from './Dialogs.module.css';
import {actionCreator_addMessage, actionCreator_newMessageInput} from "../../../pseudoRedux/state";


let messageInput = React.createRef();

export const AddMessage = (props) => {

    const newMessageInput = () => {
        let text = messageInput.current.value;
        props.dispatch(actionCreator_newMessageInput(text));
    }

    const addMessage = () => {
        props.dispatch(actionCreator_addMessage());
    }

    return (
        <div>
            <textarea onChange={newMessageInput} ref={messageInput} value={props.addMessageText} />
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