import React from 'react' ;
import styles from './MyPosts.module.css';
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/formValidator";
import {ValidatedElemCreator} from "../../../common/FormControls";

let maxLength30 = maxLengthCreator(30);
const ValidatedTextarea = ValidatedElemCreator('textarea')

const addPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={ValidatedTextarea} name='newPostText'
                       validate={[requiredField,maxLength30]} placeholder='type new post'/>
            </div>
            <div>
                <button> new post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({ form: 'addPostForm' })(addPostForm)

const MyPosts = (props) => {

    let my_posts_element = props.myPostsData.map ( post => {
        return (
            <Post text={post.text} likeCount={post.likeCount} key={post.id}/>
        )
    });


    return (
       <div className={styles.posts}>
           <h3 className={styles.header}>My posts</h3>
           <div>
               {my_posts_element}
           </div>
           <AddPostFormRedux onSubmit={props.addNewPost} />
       </div>
    )
}


export default MyPosts;