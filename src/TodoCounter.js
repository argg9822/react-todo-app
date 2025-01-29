function TodoCounter ({ pending, done}) {
    return (
        <div className='header'>
            <h2>Tienes {pending} tareas pendientes</h2>
            <h6>has completado {done}</h6>
        </div>
    );
}

export { TodoCounter };