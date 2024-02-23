import React from 'react';
import { useState } from "react";
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Item from "./models/item"

function App() {
  const [items,setItems] = useState<Item[]>([])
  function generateID(){
    return Math.floor(Math.random()*99)
  }
  const addItem = (name:string)=> {
    setItems([...items,{id:generateID(), name:name}])
  }
  return (
    <div className="App">
      <TaskForm addItem={addItem}/>
      <TaskList items={items}/>
    </div>
  );
}

export default App;
