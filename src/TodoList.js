import './TodoList.css';

function TodoList (props) {
    return (
        <div className='flex-center'>
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export { TodoList };
