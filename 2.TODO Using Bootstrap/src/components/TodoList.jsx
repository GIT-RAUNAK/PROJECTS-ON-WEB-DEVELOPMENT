export function TodoList ({todos}) {
    return(
        todos.map((todo) => {
            return(
                <div className="row" key={todo.id}>
                    <div className="col-6">
                        {todo.name}
                    </div>
                    <div className="col-4">
                        {todo.date}
                    </div>
                    <div className="col-2">

                    </div>
                </div>
            )
        })
    )
}