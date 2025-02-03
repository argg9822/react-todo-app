import React from 'react';
import './TodoFilter.css';
import { TodoContext } from '../TodoContext';
import { TodoAddButton } from '../TodoAddButton';

function TodoFilter () {
    const { filterValue, setFilterValue } = React.useContext(TodoContext);
    return (
      <div className='filter-container'>
        <input type="text" className='filter-todo' placeholder="Buscar..."
          value={filterValue}
          onChange={(event) => {
            setFilterValue(event.target.value);
          }} 
        />

        <TodoAddButton/>
      </div>
    );
}

export { TodoFilter }; 