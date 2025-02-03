import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const defaultTodos = [
  {id: 1, title: 'Comprar leche', category: 1, completed: false},
  {id: 2, title: 'Pasear al perro', category: 2, completed: false},
  {id: 3, title: 'Preparar la cena', category: 3, completed: false},
  {id: 4, title: 'Hacer una lista de tareas', category: 4, completed: false},
  {id: 5, title: 'Leer un libro', category: 5, completed: false},
  {id: 6, title: 'Comprar víveres', category: 6, completed: false},
  {id: 7, title: 'Jugar videojuegos', category: 7, completed: false},
  {id: 8, title: 'Limpiar la casa', category: 8, completed: false},
  {id: 9, title: 'Hacer ejercicio', category: 4, completed: false},
  {id: 10, title: 'Cocinar la cena', category: 3, completed: false},
  {id: 11, title: 'Salir a caminar', category: 2, completed: false},
  {id: 12, title: 'Comprar un teléfono nuevo', category: 6, completed: false},
  {id: 13, title: 'Practicar yoga', category: 7, completed: false},
]

const TodoContext = React.createContext();

function TodoProvider ({ children }){
    const {
        item: todos, 
        saveItem: setTodos, 
        loading, 
        error, 
        categories
    } = useLocalStorage('TODOS_V1', defaultTodos);
    const [filterValue, setFilterValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const countTodosDone = todos.filter(todo => todo.completed).length;
    const countTodosPending = todos.filter(todo => !todo.completed).length;

    const filteredTodos = todos.filter(todo =>  {
        const todoLowerCase = todo.title.toLocaleLowerCase();
        const filterValueLowerCase = filterValue.toLocaleLowerCase();
        return todoLowerCase.includes(filterValueLowerCase);
    });

    const completeTodo = (todoId) => {
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (todoId) => {
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    };

    const addTodo = (todoName, todoCategoryId) => {
        const todoId = todos.length > 0 ? todos.at(-1).id + 1 : 1;
        const newTodo = {
            id: todoId,
            title: todoName,
            category: todoCategoryId,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };

    const screenWidth = window.innerWidth;

    return (
        <TodoContext.Provider
            value={{
                todos,
                setTodos,
                loading,
                error,
                categories,
                filterValue,
                setFilterValue,
                countTodosDone,
                countTodosPending,
                filteredTodos,
                completeTodo,
                deleteTodo,
                addTodo,
                openModal,
                setOpenModal,
                screenWidth
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
