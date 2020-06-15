import React from "react";
import {actionCreator_addNews, actionCreator_updateText} from "../../pseudoRedux/newsPage-reducer";
import News from "./News";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    // debugger
    return {
        news: state.newsPage.news,
        addNewsText: state.newsPage.addNewsText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateTextCont: (text) => {
            dispatch(actionCreator_updateText(text))
        },
        addNewsCont: () => {
            dispatch(actionCreator_addNews())
        }
    }
}

const NewsContainer = connect(mapStateToProps,mapDispatchToProps)(News);

export default NewsContainer;