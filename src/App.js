import { TodoCounter } from './TodoCounter';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoAdd } from './TodoAdd';
import { TodoOptions } from './TodoOptions';
import { CategoryList } from './CategoryList';
import { CategoryItem } from './CategoryItem';
import React from 'react';
import './index.css';

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

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

const categories = [
  {id: 1, name: 'home'},
  {id: 2, name: 'work'},
  {id: 3, name: 'school'}
];

function App() {
  const todosLocalStorage = JSON.parse(localStorage.getItem('TODOS_V1'));
  const [todos, setTodos] = React.useState(todosLocalStorage);
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
    <>
      <TodoCounter pending={countTodosPending} done={countTodosDone}/>
      <TodoFilter filterValue={filterValue} setFilterValue={setFilterValue}/>

      <TodoOptions>
        <CategoryList>
          { categories.map(category => {
            return (
              <CategoryItem key={category.id} name={category.name} />
            );
          }) }
        </CategoryList>

        <TodoList>
          { filteredTodos.map(todo => {
            return (
              <TodoItem 
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onCompleted={() => {completeTodo(todo.id)}}
                onDeleted={() => {deleteTodo(todo.id)}}
                setTodos={setTodos}/>
            );
          }) }
        </TodoList>
        {/* <TodoAdd /> */}

      </TodoOptions>
    </>
  );
}

export default App;
