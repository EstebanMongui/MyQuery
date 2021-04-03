import React from "react";
import "./SubmitBtn.scss";

const SubmitBtn = ({ value }) =>{
    return(
        <button className="SubmitBtn" type='submit'>
            {value}
        </button>
    )
}

export default SubmitBtn;