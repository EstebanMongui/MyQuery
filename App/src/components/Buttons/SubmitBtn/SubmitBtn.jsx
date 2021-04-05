import React, { useState } from "react";
import "./SubmitBtn.scss";
import NewQueryModal from "../../NewQueryModal/NewQueryModal"

const SubmitBtn = ({ value, queryId }) =>{
    
    const [open, setOpen] = useState(null)
    
    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(null)

    return(
        <React.Fragment>
            <button className="SubmitBtn" type='submit' onClick={openModal}>
                {value}
            </button>
            <NewQueryModal isOpen={open} onClose={closeModal} type="answer" queryId={queryId}/>
        </React.Fragment>
    )
}

export default SubmitBtn;