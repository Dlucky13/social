import React from 'react' ;
import styles from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = (props) => {
    let my_posts_element = props.myPostsData.map ( post => {
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