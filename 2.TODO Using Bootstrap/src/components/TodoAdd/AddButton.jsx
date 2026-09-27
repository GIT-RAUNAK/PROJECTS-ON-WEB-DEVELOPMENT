export function AddButton({handleAddTodo}) {
    return(
        <button type="button" className="btn btn-success w-100" onClick={handleAddTodo}>
            Add
        </button>
    )
}