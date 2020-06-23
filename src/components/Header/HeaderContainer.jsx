import React from 'react'
import Header from "./Header";
import * as axios from 'axios';
import {connect} from "react-redux";
import {loadingAuthDataToogle, setAuthorizedUser} from "../../pseudoRedux/Auth-reducer";


class HeaderInnerContainer extends React.Component {

    componentDidMount() {

        this.props.loadingAuthDataToogle(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {

                if (response.data.resultCode === 0) {
                    this.props.loadingAuthDataToogle(false);
                    let {id, login, email} = response.data.data;
                    this.props.setAuthorizedUser(id, login, email);
                }
            })

    }

    render() {

        return (
            <>
                <Header isLoading={this.props.auth.isLoading}
                        isLogged={this.props.auth.isLogged}
                        login={this.props.auth.login}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        ...state
    }
}


const HeaderContainer = connect(mapStateToProps, {setAuthorizedUser, loadingAuthDataToogle})(HeaderInnerContainer)

export default HeaderContainer