import React from 'react';
import './TodoFilter.css';

function TodoFilter ({ filterValue, setFilterValue}) {
    
    return (
      <form>
        <input type="text" placeholder="Buscar..."
          value={filterValue}
          onChange={(event) => {
            setFilterValue(event.target.value);
          }} 
        />
      </form>
    );
}

export { TodoFilter }; 