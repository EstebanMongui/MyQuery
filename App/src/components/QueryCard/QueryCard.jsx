import React from "react";
import "./QueryCard.scss";
import Tag from "../Tag/Tag";
import AnswerCard from "../AnswerCard/AnswerCard"

function QueryCard(props){
    return(
        <React.Fragment>
            <div className="QueryCard">
                <div className="__QueryText">
                    <p>Query</p>
                </div>
                <div className="__QueryTags">
                    <Tag value="username"/>
                    <Tag value="category"/>
                    <Tag value="dd/mm/aaaa"/>
                </div>
            </div>
            <AnswerCard answer="Some answer"/>
        </React.Fragment>
    )
}

export default QueryCard;