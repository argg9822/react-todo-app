import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoAddButton(){
    const {openModal, setOpenModal} = React.useContext(TodoContext); 
    return (
        <>
           <button className='btn btn-danger' onClick={() => setOpenModal(!openModal)}>+ Agregar tarea</button>
        </>
    );
}

export { TodoAddButton };