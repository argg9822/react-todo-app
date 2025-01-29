import './TodoItem.css';

function TodoItem (props) {

    return (
        <label htmlFor={`todo-${props.id}`}>
            <li>
                <input type="checkbox" defaultChecked={props.completed} id={`todo-${props.id}`} onChange={(event) => {
                    props.setTodos((prevTodos) => {                    
                        
                        return prevTodos.map((todo) => {
                            if (todo.id === props.id) {
                                return { ...todo, completed: event.target.checked };
                            }
                            return todo;
                        });
                    });
                }} hidden/>
                <p className={`${props.completed && `todo-item-completed`}`}>{props.title}</p>
                <button className='btn' onClick={() => {
                    props.setTodos((prevTodos) => {
                        return prevTodos.filter((todo) => {
                            return todo.id !== props.id;
                        });
                    });
                }}>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#db0000">
                        <g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" strokeWidth="0.096"></g><g id="SVGRepo_iconCarrier">
                            <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#cc0000" strokeWidth="2"></path> 
                        </g>
                    </svg>
                </button>
            </li>
        </label>
    );
}

export { TodoItem }