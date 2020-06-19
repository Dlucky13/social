import React from "react";
import styles from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/img/avatar_default.jpg'

let Users = (props) => {

    if (props.usersData.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then (response => {
                props.setUsers(response.data.items)
            }
           )
      }


    return (
        <div className={styles.users_wrapper}>
            {props.usersData.map(user =>
                <div key={user.id} className={styles.user_wrapper}>
                    <div className={styles.user_status}>
                        <img src={user.photos.small = userPhoto} className={styles.ava}></img>
                        {user.follow ? <button className={styles.btn} onClick={ ( ) => {props.unfollow(user.id)}}>Unfollow</button>
                            : <button className={styles.btn} onClick={ () => {props.follow(user.id)}}>Follow</button>}
                    </div>
                    <div className={styles.user_info}>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>{'user.location'}</div>
                    </div>
                </div>

            )}
        </div>
    )

}

export default Users;