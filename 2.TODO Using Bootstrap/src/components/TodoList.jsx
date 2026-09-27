export function TodoList ({todos}) {
    return(
        todos.map((todo, index) => {
            return(
                <div key={index}>
                    {todo.name}
                    {todo.date}
                </div>
            )
        })
    )
}