import { useState } from 'react'

import { TodoName } from './components/TodoName'
import { TodoAdd } from './components/TodoAdd/TodoAdd'
import { TodoList } from './components/TodoList';

function App() {
  const[todoName, setTodoName] = useState("");
  const[todoDate, setTodoDate] =useState("");
  const[todos, setTodos] = useState([]);

  function handleAddTodo() {
    const newTodo = {
      name: todoName,
      date: todoDate
    }
    setTodos([...todos, newTodo]);
    setTodoName("");
    setTodoDate("");
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
      <TodoList 
        todos = {todos}
      />
    </>
  )
}

export default App
