import './CategoryList.css';

function TodoCategory (props){
    return (
        <div className="todo-categories flex-between">
        {props.children}
        </div>
    );
}

export { TodoCategory };