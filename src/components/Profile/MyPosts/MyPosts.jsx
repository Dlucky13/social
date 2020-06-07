import React from 'react' ;
import styles from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = () => {
    return (
       <div className={styles.posts}>
           <button> new post </button>
           <h3 className={styles.header}>My posts</h3>
            <div>
                <Post message='Hi, how are you?' likeCount='10'/>
                <Post message="It's my first post" likeCount='15'/>
            </div>
        </div>
    )
}

export default MyPosts;