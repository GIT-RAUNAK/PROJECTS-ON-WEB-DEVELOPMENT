import { useState } from 'react'

import { TodoName } from './components/TodoName'
import { TodoAdd } from './components/TodoAdd/TodoAdd'

function App() {
  const[todoName, setTodoName] = useState("");

  return (
    <>
      <TodoName />
      <TodoAdd 
        todoName = {todoName}
        setTodoName = {setTodoName}
      />
      {/* <TodoList /> */}
    </>
  )
}

export default App
