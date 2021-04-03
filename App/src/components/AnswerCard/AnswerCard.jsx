import React, { useEffect, useState } from "react";
import "./AnswerCard.scss";
import clearDate from "../../modules/clearDate"
import Tag from "../Tag/Tag"

function AnswerCard({query_id}){

    const [answer, setAnswer] = useState([])

    function getAnswer(){
        fetch(`http://127.0.0.1:8000/answers/${query_id}/`,{
            method:'GET',
            mode:'cors'
        })
        .then((response)=>{
            return response.json()
        })
        .then((answers)=>{
            answers.map(a => {
                return(
                    setAnswer(a)
                )
            })
        })
    }
    
    useEffect(()=>{
        getAnswer()
    }, [])

    if (!answer.id){
        return null
    }
    return(
        <div className="AnswerCard">
            <div className="__AnswerTags">
                <Tag value="username"/>
                <Tag value={clearDate(answer.created)}/>
            </div>
            <div className="__AnswerText">
                <p>{answer.value}</p>
            </div>
        </div>
    )
};

export default AnswerCard;