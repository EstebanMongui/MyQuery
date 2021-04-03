import React from "react";

import "./StatisticsBox.scss"

function StatisticsBox(props){
    return(
        <React.Fragment>
            <div className="StatisticsBox">
                <h2>Category Name</h2>
                <div className="__QueriesPercent">
                    <h1>#</h1>
                    <h3>Queries</h3>
                </div>
            </div>
        </React.Fragment>
    );
};

export default StatisticsBox;