import React from "react";
import {updateTextCont, addNewsCont} from "../../pseudoRedux/newsPage-reducer";
import News from "./News";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        news: state.newsPage.news,
        addNewsText: state.newsPage.addNewsText
    }
}

const NewsContainer = connect(mapStateToProps,{updateTextCont,addNewsCont})(News);

export default NewsContainer;