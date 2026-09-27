import { useState } from 'react'

import { TodoName } from './components/TodoName'
import { TodoAdd } from './components/TodoAdd/TodoAdd'

function App() {
  const[todoName, setTodoName] = useState("");
  const[todoDate, setTodoDate] =useState("");
  const[todos, setTodos] = useState([]);

  const newTodo = [];
  function handleAddTodo() {
    newTodo = {
      name : todoName,
      date : todoDate
    }
  }
  const updatedTodos = [...previousTodos, newTodo];

  console.log(updatedTodos);

  setTodos(updatedTodos);
  
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
      {/* <TodoList /> */}
    </>
  )
}

export default App
