import React, { useState } from "react";
import "./NewQueryBtn.scss";

import NewQueryModal from "../../NewQueryModal/NewQueryModal"

const NewQueryBtn = () =>{

    const [open, setOpen] = useState(null)

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(null)

    return(
        <React.Fragment>
            <button className="NewQueryBtn" onClick={openModal}>
                ?
            </button>
            <NewQueryModal isOpen={open} onClose={closeModal} type="query"/>
        </React.Fragment>
    )
}

export default NewQueryBtn;