import { TodoCounter } from '../TodoCounter';
import { TodoFilter } from '../TodoFilter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
// import { TodoAdd } from '../TodoAdd';
import { TodoOptions } from '../TodoOptions';
import { TodoCategory } from '../TodoCategory';
import { CategoryItem } from '../TodoCategory/CategoryItem';

function AppUI (props) {
    return (
        <>
            <TodoCounter 
                pending={props.countTodosPending} 
                done={props.countTodosDone}
            />
            
            <TodoFilter 
                filterValue={props.filterValue} 
                setFilterValue={props.setFilterValue}
            />
    
            <TodoOptions>
                <TodoCategory>
                { props.categories.map(category => {
                    return (
                    <CategoryItem key={category.id} name={category.name} />
                    );
                }) }
                </TodoCategory>
        
                <TodoList>
                { props.filteredTodos.map(todo => {
                    return (
                    <TodoItem 
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onCompleted={() => {props.completeTodo(todo.id)}}
                        onDeleted={() => {props.deleteTodo(todo.id)}}
                        setTodos={props.setTodos}/>
                    );
                }) }
                </TodoList>
                {/* <TodoAdd /> */}
        
            </TodoOptions>
        </>
      );
}

export { AppUI };