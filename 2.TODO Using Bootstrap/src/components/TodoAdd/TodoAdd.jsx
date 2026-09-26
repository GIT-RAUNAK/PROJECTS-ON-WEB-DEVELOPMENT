import { AddButton } from "./AddButton";
import { DateInput } from "./DateInput";
import { TodoInput } from "./TodoInput";

export function TodoAdd() {
    return <>
        <div className="container">
            <div className="row">
                <div className="col-6"> 
                    <TodoInput />    
                </div>
                <div className="col-4">
                    <DateInput /> 
                </div>
                <div className="col-2"> 
                    <AddButton />    
                </div>
            </div>
        </div>
    </>
}