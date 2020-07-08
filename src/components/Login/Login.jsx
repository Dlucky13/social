import React from 'react'
import {Field, reduxForm} from "redux-form";
import {login} from "../../pseudoRedux/Auth-reducer";
import {ValidatedElemCreator} from "../../common/FormControls";
import {requiredField} from "../../utils/validators/formValidator";
import {connect} from "react-redux";
import styles from './login.module.css'

const ValidatedInput = ValidatedElemCreator('input')

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} component={ValidatedInput}
                validate={[requiredField]} type={'email'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={ValidatedInput}
                type={'password'} validate={[requiredField]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={ValidatedInput} />
            </div>
            {props.error && <p className={styles.formErr}>{props.error}</p>}
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    return (
        <>
            <p> Login</p>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

export default connect(null,{login})(Login)