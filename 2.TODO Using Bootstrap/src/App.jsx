import { useState, useEffect } from 'react'

import { TodoName } from './components/TodoName'
import { TodoAdd } from './components/TodoAdd/TodoAdd'
import { TodoList } from './components/TodoList';

function App() {
  const[todoName, setTodoName] = useState("");
  const[todoDate, setTodoDate] =useState("");
  const[todos, setTodos] = useState([]);
  const[error, setError] = useState("");
  const[isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if(isLoaded) localStorage.setItem("todos", JSON.stringify(todos));
  },[todos, isLoaded])

  useEffect(() => {
   const savedItems = localStorage.getItem("todos");
   if(savedItems!==null) {
    const parsedTodos = JSON.parse(savedItems);
    setTodos(parsedTodos)
   }
  setIsLoaded(true);
  },[])

  function handleAddTodo() {
    if(todoName && todoDate){
      const newTodo = {
        id: Date.now(),
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

  function handleDeleteTodo(id) {
    const updatedTodo = todos.filter((todo)=>{
      return todo.id!==id;
    })
    setTodos(updatedTodo);
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
        handleDeleteTodo = {handleDeleteTodo}
      />
    </>
  )
}

export default App
