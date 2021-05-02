import React from 'react';
import firebase from './firebase';

export default function Todo({todo}) {
    
    const deleteFunction = () => {
        const item = firebase.database().ref('todolist').child(todo.id);
        item.remove();
    }

    const completeFunction = () => {
        const item = firebase.database().ref('todolist').child(todo.id);
        item.update({
            complete : !todo.complete
        })
    }
    
  return (
    <div className="todocontainer">
      <div className="todo" key={todo.id}>
      <span style={{textDecoration: todo.complete ? 'line-through' : 'normal'}}>{todo.text}</span>
    <br /><br /><div className="buttonscontainer">
      <button onClick={deleteFunction} className="deletebutton">Delete</button>
      <button onClick={completeFunction} className="completebutton">Complete</button>
      </div>
      </div>
    </div>
  )
}
