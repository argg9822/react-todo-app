import { TodoIcon } from './TodoIcon';
import './TodoItem.css';

function TodoItem (props) {

    return (
        <label htmlFor={`todo-${props.id}`}>
            <li>
                <input type="checkbox" 
                    defaultChecked={props.completed} id={`todo-${props.id}`} 
                    onChange={props.onCompleted}
                    hidden
                />
                <p className={`${props.completed && `todo-item-completed`}`}>{props.title}</p>
                <button className='btn' onClick={props.onDeleted}>
                    <TodoIcon type="delete"/>
                </button>
            </li>
        </label>
    );
}

export { TodoItem }