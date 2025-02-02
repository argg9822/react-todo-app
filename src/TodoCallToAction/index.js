import { TodoAddButton } from '../TodoAddButton';
import './TodoCallToAction.css';

function TodoCallToAction() {
    return (
        <div class="btn-add-container">
            <h2>No hay ninguna tarea para mostrar</h2>
            <span>Crea una para continuar</span>
            <TodoAddButton/>
            <div>
                <img src='/images/man-working-laptop.webp' alt="Agregar tarea" />
            </div>
        </div>
    );
}

export { TodoCallToAction };
