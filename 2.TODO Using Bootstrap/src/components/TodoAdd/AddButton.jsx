export function AddButton({handleAddTodo}) {
    return(
        <button type="button" className="btn btn-success" onClick={handleAddTodo}>
            Add
        </button>
    )
}