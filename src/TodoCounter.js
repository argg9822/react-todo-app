function TodoCounter ({ pending, done}) {
    const h2Message = pending == 0 ? `¡Felicitaciones!` : `Tienes ${pending} tareas pendientes`;
    const doneMessage = done == 0 ? `¡No tienes tareas completadas!` : `has completado ${done} tareas`;

    return (
        <div className='header'>
            <h2>{h2Message}</h2>
            <h6>{doneMessage}</h6>
        </div>
    );
}

export { TodoCounter };
