function TodoCounter ({ pending, done}) {
    return (
        <div className='header'>
            <h2>Tienes {pending} tareas pendientes</h2>
            <h6>has realizado {done}</h6>
        </div>
    );
}

export { TodoCounter };