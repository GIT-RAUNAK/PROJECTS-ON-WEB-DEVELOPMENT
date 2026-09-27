import { AddButton } from "./AddButton";
import { DateInput } from "./DateInput";
import { TodoInput } from "./TodoInput";

export function TodoAdd({todoName, setTodoName, todoDate, setTodoDate, handleAddTodo}) {
    return <>
        <div className="container">
            <div className="row">
                <div className="col-6"> 
                    <TodoInput 
                        todoName = {todoName}
                        setTodoName = {setTodoName}
                    />    
                </div>
                <div className="col-4">
                    <DateInput 
                        todoDate = {todoDate}
                        setTodoDate = {setTodoDate}
                    /> 
                </div>
                <div className="col-2"> 
                    <AddButton
                        handleAddTodo = {handleAddTodo}
                    />    
                </div>
            </div>
        </div>
    </>
}