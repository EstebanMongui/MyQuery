import React, { useState, useEffect } from "react";
import "./QueryCard.scss";
import Tag from "../Tag/Tag";
import AnswerCard from "../AnswerCard/AnswerCard"
import clearDate from "../../modules/clearDate"

function QueryCard(props){
    
    // eslint-disable-next-line no-unused-vars
    const [queries, setQuery] = useState([]);
    const URL = 'http://127.0.0.1:8000/queries/';
    console.log(queries)

    useEffect(()=>{
        fetch(URL, {
            method: 'GET',
            mode:'cors',
            headers:{
                'content-type':'application/json'
            }
        })
        .then((response)=>{
            return response.json()
        })
        .then((queries)=>{
            setQuery(queries)
        })
    }, [])

    function refactCaregory(category){
        if (category === 'TEC'){
            return 'Tecnológica'
        }else if(category === 'ECH'){
            return 'Economica'
        }else if(category === 'LEG'){
            return 'Legal'
        }
        return 'Administrativa'
    }

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
                        <AnswerCard query_id={query.id}/>
                    </React.Fragment>
                );
            })}
        </div>
    )
}

export default QueryCard;