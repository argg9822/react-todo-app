import React from 'react';
import './TodoFilter.css';

function TodoFilter ({ filterValue, setFilterValue}) {
    
    return (
      <div className='filter-container'>
        <input type="text" placeholder="Buscar..."
          value={filterValue}
          onChange={(event) => {
            setFilterValue(event.target.value);
          }} 
        />
      </div>
    );
}

export { TodoFilter }; 