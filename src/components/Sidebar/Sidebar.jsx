import React from 'react';
import styles from './Sidebar.module.css';
import Friend_sidebar from './Friend/Friend_sidebar';

const Sidebar = (props) => {
    let friendsElements = props.state.friendsData.map( friend => {
        return <Friend_sidebar fname={friend.name}  key={friend.id}/>
    })
    return (
        <div className={styles.sidebar}>
            {friendsElements}
        </div>
    )
}

export default Sidebar;