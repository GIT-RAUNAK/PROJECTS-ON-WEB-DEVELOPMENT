export function DateInput({todoDate, setTodoDate}) {
    return(
        <input 
            type="date" 
            className="form-control"
            value={todoDate}
            onChange={(event) => {
                setTodoDate(event.target.value);
            }}
        />
    )
}