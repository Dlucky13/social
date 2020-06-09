import React from 'react' ;
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    // debugger;
    // let myPostsData = [
    //     { id: 1, text:'Hi, how are you?' , likeCount:10},
    //     { id: 2, text:"It's my first post" , likeCount:25}
    // ];


    return (
            <div>
                <ProfileInfo />
                <MyPosts myPostsData={props.myPostsData} />
            </div>
    )
}

export default Profile;