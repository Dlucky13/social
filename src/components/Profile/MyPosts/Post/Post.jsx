import React from 'react' ;
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            {props.text}
            <div>
                <span>like: {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;
