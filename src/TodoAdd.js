function TodoAdd () {
    return (
        <form>
            <input type="text" placeholder="Escribe la tarea" />
            <button type="submit" className="button-primary">Agregar</button>
        </form>
    );
}

export { TodoAdd };