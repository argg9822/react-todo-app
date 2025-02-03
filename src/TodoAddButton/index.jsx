import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoAddButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function TodoAddButton(){
    const {openModal, setOpenModal} = React.useContext(TodoContext); 
    return (
        <div className='position-relative flex-center'>
            <button className='btn btn-danger btn-add-todo' onClick={() => setOpenModal(!openModal)}>
                <FontAwesomeIcon icon={faPlus} />
                <span className='span-add-todo'>Agregar nueva tarea</span>
            </button>
        </div>
    );
}

export { TodoAddButton };