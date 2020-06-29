import React from 'react' ;
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={styles.profile}>
            <ProfileInfo profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;