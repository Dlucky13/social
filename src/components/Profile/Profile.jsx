import React from 'react' ;
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPosts myPostsData={props.state.myPostsData}
                     newPostText={props.state.newPostText}
                     addPost={props.addPost}
                     updateNewPostInput={props.updateNewPostInput} />
        </div>
    )
}

export default Profile;