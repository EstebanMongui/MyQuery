import React from "react";
import "./AnswerCard.scss";
import clearDate from "../../modules/clearDate"
import Tag from "../Tag/Tag"
import SubmitBtn from "../Buttons/SubmitBtn/SubmitBtn"

function AnswerCard({answer, queryId}){

    if (!answer){
        return(
            <SubmitBtn value="Responder" queryId={queryId}/>
        )
    }
    return(
        <div className="AnswerCard">
            <div className="__AnswerTags">
                <Tag value="username"/>
                <Tag value={clearDate(answer.created)}/>
            </div>
            <div className="__AnswerText">
                <p>{answer}</p>
            </div>
        </div>
    )
};

export default AnswerCard;