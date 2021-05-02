import React from 'react'

export default function Form({todo, changeHandler, createTodo}) {
  return (
    <div className="formcontainer">
      <form className="form">
          <input 
            type="text"
            placeholder="Enter Todo"
            name="todo"
            value={todo}
            onChange={changeHandler}
            className="input"
          />
          <button onClick={createTodo} className="button">Add Todo</button>
      </form>
    </div>
  )
}
