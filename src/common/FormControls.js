import React from 'react'
import styles from './FormControls.module.css'
import {Field} from "redux-form";

export const ValidatedElemCreator = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched ?  meta.error : undefined;
    return (
        <div className={styles.postWrapper}>
            <Element {...input} {...props} className={hasError && styles.fieldErr}/>
            <div>
                {hasError && <span className={styles.errorMessage}> {meta.error} </span>}
            </div>
        </div>
    );
};

export const createReduxFormField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name = {name}
               validate={validators}
                component={component}
            {...props}
            />{text}
    </div>
)