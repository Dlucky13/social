import React from 'react'
import styles from './Messages.module.css';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Dialogs from "./Dialogs/Dialogs";
import Contacts from "./Contacts/Contacts";


const Messages = (props) => {

    let contactsElement = props.contactsData.map( contact =>
    {
        return (
            <Contacts name={contact.name} id={contact.id}/>
            )
    })

    let dialogsElement = props.dialogsData.map (dialog => {
        return (
            <Dialogs text={dialog.text} />
        )
    })

    return (
        <div className={styles.messages}>
            <BrowserRouter>
                <div className={styles.contacts_wrapper} >
                    {contactsElement}
                </div>
                {/*< Route path='/dialog/3' component={Dialogs}/>*/}
                <div className={styles.dialogs_wrapper}>
                    {dialogsElement}
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Messages;