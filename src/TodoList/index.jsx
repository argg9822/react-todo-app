import './TodoList.css';

function TodoList (props) {
    return (
        <div className='flex-center todo-list'>
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export { TodoList };
