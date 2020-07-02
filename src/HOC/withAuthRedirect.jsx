import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";



let mapStateToPropsToRedirect = (state) => {
    return {
        isLogged: state.auth.isLogged
    }
}

export const withAuthRedirect = (Component) => connect(mapStateToPropsToRedirect)((props) =>
        {
            if (!props.isLogged) return <Redirect to='/login'/>
            return (
                <Component {...props} />
            )
        }
    )




