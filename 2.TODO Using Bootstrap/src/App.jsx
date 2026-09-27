import { useState } from 'react'

import { TodoName } from './components/TodoName'
import { TodoAdd } from './components/TodoAdd/TodoAdd'
import { TodoList } from './components/TodoList';

function App() {
  const[todoName, setTodoName] = useState("");
  const[todoDate, setTodoDate] =useState("");
  const[todos, setTodos] = useState([]);
  const[error, setError] = useState("");

  function handleAddTodo() {
    if(todoName && todoDate){
      const newTodo = {
      name: todoName,
      date: todoDate
    }
    setTodos([...todos, newTodo]);
    setError("");
    setTodoName("");
    setTodoDate("");
    }
    else{
      setError("Please enter both a Todo and a date.");
    }
  }
  
  return (
    <>
      <TodoName />
      <TodoAdd 
        todoName = {todoName}
        setTodoName = {setTodoName}
        todoDate = {todoDate}
        setTodoDate = {setTodoDate}
        handleAddTodo = {handleAddTodo}
      />
      {error && <div>{error}</div>}
      <TodoList 
        todos = {todos}
      />
    </>
  )
}

export default App
