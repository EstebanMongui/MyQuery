import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './NewQueryModal.scss';
import SubmitBtn from "../Buttons/SubmitBtn/SubmitBtn"
import sendData from "../../modules/sendData"

function NewQueryModal({ isOpen, onClose, type, queryId }){
    
    const [query, setQuery] = useState('TEC')
    const [category, setCategory] = useState(null)
    
    const [answer, setAnswer] = useState()
    
    const [successMessage, setSuccessMessage] = useState(null)
    // eslint-disable-next-line no-unused-vars
    const [closeModal, setCloseModal] = useState(null)
    

    const handleChange = (event) => setQuery(event.target.value)
    const handleAnswer = (event) => setAnswer(event.target.value)
    const Select = (event) => setCategory(event.target.value)
    
    const handleSubmit = (event) => {
        sendData('queries', {value:query, category:category})
        setSuccessMessage('Su pregunta ha sido creada exitosamente')
        setCloseModal(onClose)
        event.preventDefault();
    }
    const handleSubmitAnswer = (event) => {
        sendData('answers',{value:answer, query_pair:queryId})
        setSuccessMessage('¡Gracias por dar respuesta!')
        setCloseModal(onClose)
        event.preventDefault();
    }
    
    if(!isOpen){
        return null
    }
    if(type==="query"){
        return ReactDOM.createPortal(
            <div className='NewQueryModal'>
                <button className="CloseBtn" onClick={()=>setCloseModal(onClose)}>X</button>
                <form className='NewQueryForm' onSubmit={handleSubmit}>
                    <p>{successMessage}</p>
                    <textarea onChange={handleChange} />
                    <div className='__FormOptions'>
                        <select className='__Category' value={category} name="category" onChange={Select}>
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
                <form className='NewQueryForm' onSubmit={handleSubmitAnswer}>
                    <p>{successMessage}</p>
                    <textarea onChange={handleAnswer} />
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