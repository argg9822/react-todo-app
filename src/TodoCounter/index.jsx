import React from 'react';
import { TodoLoadingCounter } from '../TodoLoadingCounter';
import { TodoContext } from '../TodoContext';

function TodoCounter () {
    const { countTodosPending, countTodosDone, loading } = React.useContext(TodoContext);
    const h2Message = countTodosDone === 0 ? `¡Felicitaciones!` : `Tienes ${countTodosPending} tareas pendientes`;
    const doneMessage = countTodosDone === 0 ? `¡No tienes tareas completadas!` : `has completado ${countTodosDone} tareas`;

    return (
        <div className='header'>
            { loading && 
                <TodoLoadingCounter/>
            }

            { !loading && 
                <>
                    <h2>{h2Message}</h2>
                    <h6>{doneMessage}</h6>
                </>
            }
        </div>
    );
}

export { TodoCounter };
