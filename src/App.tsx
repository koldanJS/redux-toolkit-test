import React, { useState } from 'react'
import './App.scss'

interface Todos {
  id: Date
  text: string
  completed: boolean
}

export default function App() {

  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = ():void => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        // {
        //   id: new Date().toISOString(),
        //   text,
        //   completed: false
        // }
      ])
    }
  }

  return (
    <div className="App">
      <label>
        <input value={text} onChange={(e) => e.target.value} />
        <button onClick={addTodo} >Add todo</button>
      </label>
    </div>
  )
}