import React, { useEffect, useState } from 'react';
import firebase from './firebase';
import Todo from './Todo';

export default function TodoList() {
    const [todoList, setTodoList] = useState();
    
    useEffect(()=>{
        const todoitems = firebase.database().ref('todolist');
        todoitems.on("value", (snapshot)=>{
           const items = snapshot.val();
           console.log(items)
           
           const todoList = [];
           for(let id in items){
                todoList.push({id, ...items[id]})
           }
           todoList.reverse();
           setTodoList(todoList);
           console.log(todoList)
        })
    },[]);

    if(!todoList){
      return <span>Your Todos will appear here!</span>
    }

    if(todoList && !todoList[0]){
      return <span>Your Todos will appear here!</span>
    }

  return (
    <div className="todolistcontainer">
        {todoList ? todoList.map((todo, index) => {
            return <Todo todo={todo} key={index}/>
        }) : ''}
    </div>
  )
}
