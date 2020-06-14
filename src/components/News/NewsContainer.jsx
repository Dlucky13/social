import React from "react";
import {actionCreator_addNews, actionCreator_updateText} from "../../pseudoRedux/newsPage-reducer";
import News from "./News";
import StoreContext from "../../Context";

const NewsContainer = ( props ) => {

    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState().newsPage;

                let updateTextCont = (text) => {
                    store.dispatch(actionCreator_updateText(text))
                };

                let addNewsCont = () => {
                    store.dispatch(actionCreator_addNews());
                };

                return (
                <News updateTextCont={updateTextCont} addNewsCont={addNewsCont} state={state}/>
                )
            }
            }
            </StoreContext.Consumer>
    )
}

export default NewsContainer;