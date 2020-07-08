import React, {useState} from "react";
import defAvatar from "../../../assets/img/avatar_default.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {createReduxFormField, ValidatedElemCreator} from "../../../common/FormControls";
import {requiredField} from "../../../utils/validators/formValidator";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import Contacts from "../../Messages/Contacts/Contacts";
import styles from "../../Login/login.module.css";


let ValidatedInput = ValidatedElemCreator('input')


const ProfileDataForm = ({profile,handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <b>Full Name</b> {createReduxFormField ('full Name', 'fullName', [],ValidatedInput )}

            {createReduxFormField('','lookingForAJob',[],
            'input', {type: 'checkbox'},'Ищу работу')}

            <b>My professional skills</b> :
            {createReduxFormField('My professional skills','lookingForAJobDescription',[],
            'textarea')}

            <div>
                <b>About me</b> :
                {createReduxFormField('about Me', 'aboutMe', [], 'input',)}
            </div>

            <div>
                <b>Contacts</b>:
                {Object.keys(profile.contacts).map(contact => {
                    return (
                        <div key={contact}>
                            <b>{contact}:</b>
                            {createReduxFormField(contact,'contacts.' + contact,[],'input')}
                        </div>
                    )
                })}
            </div>
            {error && <p className={styles.formErr}> {error} </p>}
            <button>Save changes</button>

        </form>
    )
}

export default  reduxForm({form: 'editProfile'})(ProfileDataForm);

