import React, { useState, useEffect } from "react";
import "./QueryCard.scss";
import Tag from "../Tag/Tag";
import AnswerCard from "../AnswerCard/AnswerCard";
import clearDate from "../../modules/clearDate";
import refactCaregory from "../../modules/dataRefactor"

function QueryCard(props){
    
    const [queries, setQueries] = useState([]);
    data = queries
    const [answer] = useState(null)
    const URL = 'http://127.0.0.1:8000/queries/';


    function getQueries(){
        fetch(URL, {
            method: 'GET',
            mode:'cors',
            headers:{
                'content-type':'application/json'
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((queries) => {
            return setQueries(queries)
        })
    }

    useEffect(()=>{
        getQueries()
    }, [])

    return(
        <div className="QueryCard__Container">
            {queries.map(query => {
                return(
                    <React.Fragment>
                        <div key={query.id} className="QueryCard">
                            <div className="__QueryText">
                                <p>{query.value}</p>
                            </div>
                            <div className="__QueryTags">
                                <Tag value="username"/>
                                <Tag value={refactCaregory(query.category)}/>
                                <Tag value={clearDate(query.created)}/>
                            </div>
                        </div>
                        <AnswerCard answer={answer} queryId={query.id}/>
                    </React.Fragment>
                );
            })}
        </div>
    )
}

export let data = []

export default QueryCard;