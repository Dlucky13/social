import React from "react";
import styles from './Users.module.css'

let Users = (props) => {

    if (props.usersData.length === 0) {
        props.setUsers([
            {
                id: 1, name: 'Dmitry', follow: true, status: 'just happy', location: 'Saint-Petersburg',
                ava: 'https://i1.sndcdn.com/avatars-000323700456-wu94n2-t500x500.jpg'
            },
            {
                id: 2, name: 'Kostya', follow: false, status: 'work hard', location: 'Moscow',
                ava: 'https://i1.sndcdn.com/avatars-000323700456-wu94n2-t500x500.jpg'
            },
            {
                id: 3, name: 'Sasha', follow: false, status: '...', location: 'Kiev',
                ava: 'https://i1.sndcdn.com/avatars-000323700456-wu94n2-t500x500.jpg'
            },
            {
                id: 4, name: 'Maksim', follow: true, status: 'gl hf', location: 'Amsterdam',
                ava: 'https://i1.sndcdn.com/avatars-000323700456-wu94n2-t500x500.jpg'
            },
        ])
    }


    return (
        <div className={styles.users_wrapper}>
            {props.usersData.map(user =>
                <div key={user.id} className={styles.user_wrapper}>
                    <div className={styles.user_status}>
                        <img src={user.ava} className={styles.ava}></img>
                        {user.follow ? <button className={styles.btn} onClick={ ( ) => {props.unfollow(user.id)}}>Unfollow</button>
                            : <button className={styles.btn} onClick={ () => {props.follow(user.id)}}>Follow</button>}
                    </div>
                    <div className={styles.user_info}>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>{user.location}</div>
                    </div>
                </div>

            )}
        </div>
    )

}

export default Users;