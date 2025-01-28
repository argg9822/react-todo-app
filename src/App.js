import { TodoCounter } from './TodoCounter';
import { TodoFilter } from './TodoFilter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoAdd } from './TodoAdd';
import { TodoOptions } from './TodoOptions';
import { CategoryList } from './CategoryList';
import { CategoryItem } from './CategoryItem';
import './index.css';

const todos = [
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
];

const categories = [
  {id: 1, name: 'home'},
  {id: 2, name: 'work'},
  {id: 3, name: 'school'}
];

const countTodosDone = todos.filter(todo => todo.completed).length;
const countTodosPending = todos.filter(todo => !todo.completed).length;

function App() {
  return (
    <>
      <TodoCounter pending={countTodosPending} done={countTodosDone}/>
      <TodoFilter />
      {/* <TodoAdd /> */}

      <TodoOptions>
        <CategoryList>
          { categories.map(category => {
            return (
              <CategoryItem key={category.id} name={category.name} />
            );
          }) }
        </CategoryList>

        <TodoList>
          { todos.map(todo => {
            return (
              <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
            );
          }) }
        </TodoList>
      </TodoOptions>
    </>
  );
}

export default App;
