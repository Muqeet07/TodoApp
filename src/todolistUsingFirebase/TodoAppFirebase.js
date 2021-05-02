import React, { useState } from 'react'
import Form from './Form';
import firebase from './firebase';
import TodoList from './TodoList';
import './todostyle.css';


export default function TodoAppFirebase() {
  const [todo, setTodo] = useState('');

  const changeHandler = (e) => {
    setTodo(e.target.value);
  }

  const value = {
    text: todo,
    complete: false
  }

  const createTodo = (e) => {
    e.preventDefault();

    const todos = firebase.database().ref('todolist');
    todos.push(value);
    setTodo('');
  }

  return (
    <div className="contentcontainer">
      <h1>Todo App</h1>
      <Form 
        todo={todo}
        changeHandler={changeHandler}
        createTodo={createTodo}
      />
      <h2>Todo List</h2>
      <TodoList />
    </div>
  )
}
