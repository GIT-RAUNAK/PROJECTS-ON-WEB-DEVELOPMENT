export function TodoList ({todos}) {
    return(
        todos.map((todo, index) => {
            return(
                <div className="row" key={index}>
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