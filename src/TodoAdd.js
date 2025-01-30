import { AddIcon } from "./AddIcon";

function TodoAdd () {
    return (
        <div>
            <input type="text" placeholder="Escribe la tarea..." />
            <button type="submit" className="button-primary">
                <AddIcon/>
            </button>
        </div>
    );
}

export { TodoAdd };