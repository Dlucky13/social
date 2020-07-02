import React from "react";
import {updateTextCont, addNewsCont} from "../../pseudoRedux/newsPage-reducer";
import News from "./News";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {

    return {
        news: state.newsPage.news,
        addNewsText: state.newsPage.addNewsText
    }
}

export default compose(
    connect(mapStateToProps,{updateTextCont,addNewsCont})
    // , withAuthRedirect
)(News)