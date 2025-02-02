import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoFilter } from '../TodoFilter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoOptions } from '../TodoOptions';
import { TodoCategory } from '../TodoCategory';
import { CategoryItem } from '../TodoCategory/CategoryItem';
import { TodoLoadingList } from '../TodoLoadingList';
import { Modal } from '../Modal';
import { TodoAdd } from '../TodoAdd';
import { TodoCallToAction } from '../TodoCallToAction';
import { TodoContext } from '../TodoContext';

import '../index.css';

function AppUI () {
    const {
        loading,
        error,
        categories,
        filteredTodos,
        completeTodo,
        deleteTodo,
        openModal,        
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoFilter />

            <TodoOptions>
                <TodoCategory>
                    { categories.map(category => {
                        return (
                        <CategoryItem key={category.id} name={category.name} />
                        );
                    }) }
                </TodoCategory>   

                <TodoList>
                    { loading && 
                        <>
                            <TodoLoadingList/>
                            <TodoLoadingList/>
                            <TodoLoadingList/>
                        </>
                    }
                    { error && 
                        <p>Error al cargar la lista de TODOS</p> 
                    }
                    { !loading && filteredTodos.length === 0 && 
                        <>
                            <TodoCallToAction/>
                            {openModal && 
                                <Modal>
                                    <TodoAdd/>
                                </Modal>
                            }
                        </>
                    }

                    { !loading && filteredTodos.map(todo => {
                        return (
                        <TodoItem 
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onCompleted={() => {completeTodo(todo.id)}}
                            onDeleted={() => {deleteTodo(todo.id)}}
                        />
                        );
                    }) }
                </TodoList>
            </TodoOptions>
        </>
    );
}

export { AppUI };
