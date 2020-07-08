import React, {useState} from 'react' ;
import styles from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader";
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defAvatar from '../../../assets/img/avatar_default.jpg'
import {updateProfileAvatar} from "../../../pseudoRedux/profilePage-reducer";
import ProfileDataForm from "./ProfileDataForm";
import Contacts from "../../Messages/Contacts/Contacts";
import ProfileDataFormRedux from "./ProfileDataForm";


const ProfileInfo = ({isOwner, status, updateProfileAvatar, updateProfileStatus, profile,saveProfileChanges}) => {

    let [editMode, setEditMode] = useState(false);

    let activateEditMode = () => {
        setEditMode(true);
    }


    const onNewAvatarSelected = (e) => {
        if (e.target.files.length) {
            let chosenImg = e.target.files[0];
            updateProfileAvatar(chosenImg);
        }
    }

    if (!profile) {
        return <Preloader/>
    }

    const onSubmit = (formData) => {
        saveProfileChanges(formData).then(
            () => {
                setEditMode(false);
            }
        )

    }

    return (
        (!editMode) ?
            <div className={styles.user_profile}>
                <img src={profile.photos.small || defAvatar} className={styles.user_avatar}/>
                {isOwner &&
                <>
                    <label className={styles.upload_msg}>
                        <input type='file' className={styles.upload_input}
                               onChange={onNewAvatarSelected}/>
                        change avatar
                    </label>

                </>
                }
                <ProfileData profile={profile} isOwner={isOwner} activateEditMode={activateEditMode}/>
            </div>
            : <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
    )
}

const ProfileData = ({profile,isOwner,activateEditMode}) => {

    return (
        <div>
            <div className={styles.fullName}> {profile.fullName}</div>
            <div>{profile.aboutMe}</div>
            {profile.lookingForAJob ? <div>Ищу работу</div> : <div>Работа это не моё</div>}
            <div>{profile.lookingForAJobDescription || 'тут будут навыки'}</div>
            <ul className={styles.profile_contacts}>
                {Object.entries(profile.contacts).map(([social, contact]) => {
                    return <SocialContacts key={social} social={social} contact={contact}/>
                })}
            </ul>
            {isOwner && <button onClick={activateEditMode}>edit Profile</button>}
        </div>


    )
}

const SocialContacts = ({social, contact}) => {
    return <li className={styles.contact_item} key={social}>{social} : {contact} </li>
}

export default ProfileInfo;