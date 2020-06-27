import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

// export const withAuthRedirect = (Component) => {
//     class RedirectComponent extends React.Component {
//         render() {
//             if (!this.props.isLogged) return <Redirect to='/login'/>
//             return <Component {...this.props} />
//         }
//     }
//     return RedirectComponent;
// }

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




