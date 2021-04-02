import React from "react";
import "./Tag.scss";

function Tag(props){
    return(
        <div className="Tag">
            <h2>{props.value}</h2>
        </div>
    );
};

export default Tag;