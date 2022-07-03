import React, { useState } from 'react'
import './App.scss'

interface Todo {
  id: string
  text: string
  completed: boolean
}

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState('')

  const addTodo = ():void => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false
        }
      ])
      setText('')
    }
  }

  const checkHandler = (id: string) => {
    let newTodos = [...todos]
    newTodos = newTodos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo} >Add todo</button>
      </label>

      <ul>
        {todos.map(todo =>
          <li key={todo.id} >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => checkHandler(todo.id)}
            />
            <span>{todo.text}</span>
            <span>&times;</span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App