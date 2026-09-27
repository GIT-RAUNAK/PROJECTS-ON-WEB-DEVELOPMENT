import { DeleteButton } from "./DeleteButton";

export function TodoList({ todos, handleDeleteTodo }) {
    return (
        <div className="container mt-3">
            {todos.map((todo) => {
                return (
                    <div
                        className="row align-items-center mb-2"
                        key={todo.id}
                    >
                        <div className="col-6">
                            {todo.name}
                        </div>

                        <div className="col-4">
                            {todo.date}
                        </div>

                        <div className="col-2 ">
                            <DeleteButton
                                todoId={todo.id}
                                handleDeleteTodo={handleDeleteTodo}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}