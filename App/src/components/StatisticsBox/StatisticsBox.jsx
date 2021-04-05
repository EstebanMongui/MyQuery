import React, { useEffect, useState } from "react";
import "./StatisticsBox.scss"


function StatisticsBox({ds}){
    
    const [dataSet, clearDataSet] = useState(Array.from(ds))
    const categoy = (data) => data[0]
    const queantity = (data) => data[1]

    return(
        <div className="StaticBoxContainer">
            {dataSet.map(data => {
                return(
                    <div className="StatisticsBox">
                        <h2>{categoy(data)}</h2>
                        <div className="__QueriesPercent">
                            <h1>{queantity(data)}</h1>
                            <h3>Preguntas</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default StatisticsBox;