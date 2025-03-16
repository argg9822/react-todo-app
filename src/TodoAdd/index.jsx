import React from 'react';
import { TodoContext } from '../TodoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

function TodoAdd (){
    const { setOpenModal, categories, addTodo } = React.useContext(TodoContext);
    const [todoName, setTodoName] = React.useState('');
    const [todoCategory, setTodoCategory] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        setOpenModal(false);
        addTodo(todoName, todoCategory);
    }

    const onChangeName = (event) => {
        setTodoName(event.target.value);
    }

    const onChangeCategory = (event) => {
        setTodoCategory(event.target.value);
    }
    
    return (
        <div className="modal-body">
            <h2>Agregar nueva tarea</h2>
            <form onSubmit={onSubmit}>
                <div className='flex-column'>
                    {/* Select de categorías */}
                    <select className='select' onChange={onChangeCategory}>
                        <option value="">Selecciona una categoría...</option>
                        {categories.map(category => {
                            return <option value={category.id}>{category.name}</option>
                        })}
                    </select>

                    <textarea 
                        className='mt-2' 
                        placeholder="Agrega una nueva tarea" 
                        onChange={onChangeName}
                        rows="5" />
                </div>

                <div className='flex-column'>
                    <button type='submit' className="btn btn-success" title='Guardar'>
                        <FontAwesomeIcon icon={faFloppyDisk} size="lg" />
                    </button>
                    <button className="btn btn-secondary mt-1" 
                        onClick={() => {setOpenModal(false)}}  
                        title='Cancelar'
                    >
                        <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button> 
                </div>
            </form>
        </div>
    );
}


export { TodoAdd };