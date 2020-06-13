import React from "react";
import styles from './News.module.css';
import {actionCreator_addNews, actionCreator_updateText} from "../../pseudoRedux/newsPage-reducer";

let newsText = React.createRef()

const OneNews = (props) => {
    return (
        <p> {props.text} </p>
    )
};



const News = ( props ) => {

    let postedNews = props.state.news.map( news => {
        return (
            <OneNews text={news.text}/>
        )
        });

    let updateText = () => {
        let text = newsText.current.value;
        props.dispatch(actionCreator_updateText(text))
    };

    let addNews = () => {
        props.dispatch(actionCreator_addNews());
    };

    return (
        <div>
            <h2>News</h2>
            <div className={styles.add_news_wrapper}>
                <textarea ref={newsText} value={props.state.addNewsText} onChange={updateText}/>
                <button onClick={addNews}>Add news</button>
            </div>
            <div>
                {postedNews}
            </div>
        </div>
    )
}

export default News;