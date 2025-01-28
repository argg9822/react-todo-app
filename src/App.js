import { TodoCounter } from './TodoCounter';
import { TodoFilter } from './TodoFilter';
import { AddTodoButton } from './AddTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoAdd } from './TodoAdd';
import './App.css';

const todos = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Clean the house', completed: true },
  { id: 3, title: 'Do laundry', completed: false },
  { id: 4, title: 'Study for exams', completed: true },
  { id: 5, title: 'Make dinner', completed: false },
  { id: 6, title: 'Code a project', completed: false },
  { id: 7, title: 'Write a blog post', completed: false },
  { id: 8, title: 'Take a nap', completed: false },
  { id: 9, title: 'Visit family', completed: false },
  { id: 10, title: 'Read a book', completed: false },
];

const countTodosDone = todos.filter(todo => todo.completed).length;
const countTodosPending = todos.filter(todo => !todo.completed).length;

function App() {
  return (
    <>
      <TodoCounter pending={countTodosPending} done={countTodosDone}/>
      <TodoFilter />

      <TodoList>
        <TodoAdd>
          
        </TodoAdd>
        { todos.map(todo => {
          return (
            <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
          );
        }) }
      </TodoList>

      <AddTodoButton />
    </>
  );
}

export default App;
