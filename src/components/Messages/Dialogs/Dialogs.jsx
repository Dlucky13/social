import React from 'react';
import styles from './Dialogs.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea, ValidatedElemCreator} from "../../../common/FormControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/formValidator";

let maxLength150 = maxLengthCreator(150);
const ValidatedTextarea = ValidatedElemCreator('textarea')

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field component={ValidatedTextarea} name='addMessageText'
                   validate={[requiredField,maxLength150]} placeholder='type your message'/>
            <button>Send Message</button>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: 'addMessageForm'})(AddMessageForm)

const Dialogs = (props) => {
    return (
        <div className={styles.dialog}>
            <div>{props.text}</div>
        </div>
    )
}

export default Dialogs;