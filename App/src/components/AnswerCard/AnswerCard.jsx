import React from "react";
import "./AnswerCard.scss";

import Tag from "../Tag/Tag"

function AnswerCard(props){
    
    return(
        <div className="AnswerCard">
            <div className="__AnswerTags">
                <Tag value="username"/>
                <Tag value="dd/mm/aaaa"/>
            </div>
            <div className="__AnswerText">
                <p>{props.answer}</p>
            </div>
        </div>
    )
};

export default AnswerCard;