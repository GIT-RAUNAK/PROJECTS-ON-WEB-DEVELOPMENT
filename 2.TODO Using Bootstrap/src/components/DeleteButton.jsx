export function DeleteButton({todoId, handleDeleteTodo}) {
    return(
        <button type="button" className="btn btn-danger" onClick={() => handleDeleteTodo(todoId)}>
            Delete
        </button>
    )
}