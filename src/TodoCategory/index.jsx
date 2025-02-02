import './CategoryList.css';

function TodoCategory (props){
    return (
        <div className="todo-categories">
        {props.children}
        </div>
    );
}

export { TodoCategory };