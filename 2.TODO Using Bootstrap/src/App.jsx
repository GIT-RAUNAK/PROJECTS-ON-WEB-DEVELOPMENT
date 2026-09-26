import { useState } from 'react'

import { TodoName } from './components/TodoName'
import { TodoAdd } from './components/TodoAdd/TodoAdd'

function App() {
  const[todoName, setTodoName] = useState("");
  const[todoDate, setTodoDate] =useState("");

  return (
    <>
      <TodoName />
      <TodoAdd 
        todoName = {todoName}
        setTodoName = {setTodoName}
        todoDate = {todoDate}
        setTodoDate = {setTodoDate}
      />
      {/* <TodoList /> */}
    </>
  )
}

export default App
