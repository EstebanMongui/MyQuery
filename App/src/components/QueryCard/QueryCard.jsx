import React, { useState, useEffect } from "react";
import "./QueryCard.scss";
import Tag from "../Tag/Tag";
import AnswerCard from "../AnswerCard/AnswerCard"

function QueryCard(props){
    
    // eslint-disable-next-line no-unused-vars
    const [query, setQuery] = useState([]);
    const URL = 'http://127.0.0.1:8000/queries'


    useEffect(()=>{
        fetch(URL)
        .then((response)=>{
            return response.json()
        })
        .then((queries)=>{
            console.log(queries)
            setQuery(queries)
        })
    })

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