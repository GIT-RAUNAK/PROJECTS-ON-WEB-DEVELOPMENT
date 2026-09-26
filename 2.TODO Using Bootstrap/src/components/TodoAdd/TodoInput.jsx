export function TodoInput ({todoName, setTodoName}) {
    return<>
        <input 
            type="text" 
            className="form-control" 
            placeholder="Enter Todo Here" 
            value={todoName}
            onChange={(event) => {
                setTodoName(event.target.value);
            }}
        />
    </>
}