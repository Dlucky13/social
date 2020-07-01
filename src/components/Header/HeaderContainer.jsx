import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthProfile, logout} from "../../pseudoRedux/Auth-reducer";

class HeaderInnerContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthProfile()
    }

    render() {

        return (
            <>
                <Header isLoading={this.props.auth.isLoading}
                        isLogged={this.props.auth.isLogged}
                        login={this.props.auth.login}
                        logout={this.props.logout}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        ...state
    }
}


const HeaderContainer = connect(mapStateToProps, {getAuthProfile,logout})(HeaderInnerContainer)

export default HeaderContainer