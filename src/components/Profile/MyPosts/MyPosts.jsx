import React from 'react' ;
import styles from './MyPosts.module.css';
import Post from './Post/Post'

export let newPostRef = React.createRef()

const MyPosts = (props) => {

    let my_posts_element = props.myPostsData.map ( post => {
        return (
            <Post text={post.text} likeCount={post.likeCount}/>
        )
    });

    let onPostChange = () => {
        let text = newPostRef.current.value
        props.onPostChangeCont(text);
    }

    let addNewPost = () => {
        props.addNewPostCont();
    }

    return (
       <div className={styles.posts}>
           <div>
               <textarea ref={newPostRef} onChange={onPostChange} value={props.newPostText}/>
           </div>
           <div>
               <button onClick={ addNewPost }> new post</button>
           </div>
           <h3 className={styles.header}>My posts</h3>
            <div>
                {my_posts_element}
            </div>
        </div>
    )
}

export default MyPosts;