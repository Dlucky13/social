import React from 'react'
import styles from './Messages.module.css';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Dialogs from "./Dialogs/Dialogs";
import Contacts from "./Contacts/Contacts";


const Messages = (props) => {
    let contactsElement = props.state.contactsData.map( contact =>
    {
        return (
            <Contacts name={contact.name} id={contact.id}/>
            )
    })

    let dialogsElement = props.state.dialogsData.map (dialog => {
        return (
            <Dialogs text={dialog.text} />
        )
    })

    return (
        <div className={styles.messages}>
            <div className={styles.contacts_wrapper}>
                {contactsElement}
            </div>
            <div className={styles.dialogs_wrapper}>
                {dialogsElement}
            </div>
        </div>
    )
}

export default Messages;