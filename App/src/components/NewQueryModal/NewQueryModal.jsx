import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './NewQueryModal.scss';
import SubmitBtn from "../Buttons/SubmitBtn/SubmitBtn"

function NewQueryModal({ isOpen, onClose, type }){

    const [query, setQuery] = useState('TEC')
    const [category, setCategory] = useState(null)

    const handleChange = (event) => setQuery(event.target.value)
    const Select = (event) => setCategory(event.target.value)
    
    const handleSubmit = (event) => {
        console.log(query, category)
        event.preventDefault();
      }

    if(!isOpen){
        return null
    }
    if(type==="query"){
        return ReactDOM.createPortal(
            <div className='NewQueryModal'>
                <button className="CloseBtn" onClick={onClose}>X</button>
                <form className='NewQueryForm' onSubmit={handleSubmit}>
                    <textarea onChange={handleChange} />
                    <div className='__FormOptions'>
                        <select className='__Category' name="category" onChange={Select}>
                            <option value='TEC'>Tecnológica</option>
                            <option value='ECH'>Económica</option>
                            <option value='LEG'>Legal</option>
                            <option value='ADM'>Administrativa</option>
                        </select>
                        <SubmitBtn value="Publicar"/>
                    </div>
                </form>
            </div>, document.getElementById('modal')
        )
    }
    else if(type === "answer"){
        return ReactDOM.createPortal(
            <div className='NewQueryModal'>
                <button className="CloseBtn" onClick={onClose}>X</button>
                <form className='NewQueryForm' onSubmit={handleSubmit}>
                    <textarea onChange={handleChange} />
                    <div className='__FormOptions'>
                        <SubmitBtn value="Responder"/>
                    </div>
                </form>
            </div>, document.getElementById('modal')
        )
    }
    return null
    
}

export default NewQueryModal;