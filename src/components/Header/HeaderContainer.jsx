import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../pseudoRedux/Auth-reducer";

class HeaderInnerContainer extends React.Component {

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


const HeaderContainer = connect(mapStateToProps, {logout})(HeaderInnerContainer)

export default HeaderContainer