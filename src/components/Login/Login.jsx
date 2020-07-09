import React from 'react'
import {Field, reduxForm} from "redux-form";
import {login} from "../../pseudoRedux/Auth-reducer";
import {ValidatedElemCreator} from "../../common/FormControls";
import {requiredField} from "../../utils/validators/formValidator";
import {connect} from "react-redux";
import styles from './login.module.css'

const ValidatedInput = ValidatedElemCreator('input')

const LoginForm = ({error,handleSubmit,captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit}>
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
                {error && <p className={styles.formErr}>{error}</p>}

                {captchaUrl &&
                <div>
                    <div><img src={captchaUrl}/></div>
                    <Field placeholder={'symbols on captcha'} name={'captcha'} validate={[requiredField]}
                           component={'input'}/>
                </div>
                }
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
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </>
    )
}


const mapStateToProps = (state) =>(
    {
    captchaUrl: state.auth.captchaUrl
    }
)

export default connect(mapStateToProps,{login})(Login)