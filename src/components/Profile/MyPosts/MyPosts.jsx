import React from 'react' ;
import styles from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = () => {

    let myPostsData = [
        { id: 1, text:'Hi, how are you?' , likeCount:10},
        { id: 2, text:"It's my first post" , likeCount:25}
    ];

    let my_posts_element = myPostsData.map ( post => {
        return (
            <Post text={post.text} likeCount={post.likeCount}/>
        )
    });

    return (
       <div className={styles.posts}>
           <button> new post </button>
           <h3 className={styles.header}>My posts</h3>
            <div>
                {my_posts_element}
            </div>
        </div>
    )
}

export default MyPosts;