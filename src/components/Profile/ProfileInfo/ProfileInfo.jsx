import React from 'react' ;
import styles from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader";


const ProfileInfo = (props) => {
debugger
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={styles.user_profile}>
                <img src={props.profile.photos.small}  className={styles.user_avatar}/>
                <div className={styles.fullName}> {props.profile.fullName}</div>
                <div className={styles.status}>{props.profile.aboutMe}</div>
                {props.profile.lookingForAJob ? <div>Ищу работу</div> : <div>Работа это не моё</div>}
                <ul className={styles.profile_contacts}>
                    {Object.entries(props.profile.contacts).map( ([social, contact]) => {
                        if (contact) {
                            return <li className={styles.contact_item}>{social} : {contact} </li>
                        }
                    })}
                </ul>

            </div>
            <div>
                Main content
            </div>
        </div>
    )
}

export default ProfileInfo;