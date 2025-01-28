import './TodoItem.css';

function TodoItem (props) {
    return (
        <li>
            <input type="checkbox" checked={props.completed} onChange={props.handleToggleComplete} />
            {props.key} {props.title}
        </li>
    );
}

export { TodoItem }