export function DeleteButton({todoId, handleDeleteTodo}) {
    return(
        <button type="button" className="btn btn-danger w-100" onClick={() => handleDeleteTodo(todoId)}>
            Delete
        </button>
    )
}