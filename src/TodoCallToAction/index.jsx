import { TodoAddButton } from '../TodoAddButton';
import './TodoCallToAction.css';

function TodoCallToAction() {
    return (
        <div class="btn-add-container">
            <h4>No hay ninguna tarea para mostrar</h4>
            <span className='mb-2'>Crea una para continuar</span>
            <TodoAddButton/>
            <div>
                <img src={`${process.env.PUBLIC_URL}/images/man-working-laptop.webp`} alt="Agregar tarea" />
            </div>
        </div>
    );
}

export { TodoCallToAction };
