import React from 'react';
import styles from './Contacts.module.css';
import {NavLink} from "react-router-dom";

const Contacts = (props) => {
    let path = '/messages/dialog/' + props.id;
    return (
        <div className={styles.contact_info}>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg'
    className={styles.avatar}/>
            <NavLink to={path} className={styles.nameLink} activeClassName={styles.active_contact}
                >{props.name}</NavLink>
        </div>
    )
}


export default Contacts;