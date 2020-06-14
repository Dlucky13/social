import React from "react";
import {actionCreator_addNews, actionCreator_updateText} from "../../pseudoRedux/newsPage-reducer";
import News from "./News";

const NewsContainer = ( props ) => {

    let state = props.store.getState().newsPage;

    let updateTextCont = (text) => {
        props.store.dispatch(actionCreator_updateText(text))
    };

    let addNewsCont = () => {
        props.store.dispatch(actionCreator_addNews());
    };

    return (
        <News updateTextCont={updateTextCont} addNewsCont={addNewsCont} state={state} />
    )
}

export default NewsContainer;