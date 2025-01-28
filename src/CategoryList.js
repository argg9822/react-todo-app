import './CategoryList.css';

function CategoryList (props){
    return (
        <div className="todo-categories flex-between">
        {props.children}
        </div>
    );
}

export { CategoryList };