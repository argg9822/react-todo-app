import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../App/useLocalStorage';

import '../index.css';

const defaultTodos = [
  { id: 1, title: 'Buy groceries', completed: false, category: 'home' },
  { id: 2, title: 'Clean the house', completed: true, category: 'home' },
  { id: 3, title: 'Do laundry', completed: false, category: 'home' },
  { id: 4, title: 'Study for exams', completed: true, category: 'school' },
  { id: 5, title: 'Make dinner', completed: false, category: 'home' },
  { id: 6, title: 'Code a project', completed: false, category: 'work' },
  { id: 7, title: 'Write a blog post', completed: false, category: 'work' },
  { id: 8, title: 'Take a nap', completed: false, category: 'home' },
  { id: 9, title: 'Visit family', completed: false, category: 'home' },
  { id: 10, title: 'Read a book', completed: true, category: 'school' },
  { id: 11, title: 'Aprender programación', completed: false, category: 'work' },
];

const categories = [
  {id: 1, name: 'home'},
  {id: 2, name: 'work'},
  {id: 3, name: 'school'}
];

function App() {
  const [todos, setTodos] = useLocalStorage('TODOS_V1', defaultTodos);
  const [filterValue, setFilterValue] = React.useState('');

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
  }

  const deleteTodo = (todoId) => {
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI
      categories={categories}
      setFilterValue={setFilterValue}
      countTodosDone={countTodosDone}
      countTodosPending={countTodosPending}
      filteredTodos={filteredTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;
