import React from 'react';
import './TodoFilter.css';
import { TodoContext } from '../TodoContext';

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
      </div>
    );
}

export { TodoFilter }; 