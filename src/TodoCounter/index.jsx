import React from 'react';
import { TodoLoadingCounter } from '../TodoLoadingCounter';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const { countTodosPending, countTodosDone, loading } = React.useContext(TodoContext);

    let h2Message = `Tienes ${countTodosPending} ${countTodosPending === 1 ? 'tarea pendiente' : 'tareas pendientes'}`;
    let doneMessage;

    if (countTodosDone === 0 && countTodosPending === 0) {
        h2Message = "Aún no tienes tareas";
        doneMessage = "Añade tu primera tarea y complétala, ¡será genial! 🚀";
    } else if (countTodosDone === 0) {
        doneMessage = "Aún no has completado ninguna tarea. ¡Ánimo, tú puedes! 💪";
    } else if (countTodosPending === 0) {
        h2Message = "¡Felicitaciones! No tienes tareas pendientes 🎉"
        doneMessage = `¡Increíble! Has completado todas tus tareas. 🎯`;
    } else if (countTodosDone === 1) {
        doneMessage = "Has completado 1 tarea, ¡sigue así! ✅";
    } else {
        doneMessage = `Has completado ${countTodosDone} tareas, ¡vamos bien! 🚀`;
    }

    return (
        <div className='header'>
            {loading && <TodoLoadingCounter />}

            {!loading && (
                <>
                    <h2>{h2Message}</h2>
                    <h6>{doneMessage}</h6>
                </>
            )}
        </div>
    );
}

export { TodoCounter };
