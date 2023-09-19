import './App.css';
import Header from './myComponents/Header';
import { Todos } from './myComponents/Todos';
import { Footer } from './myComponents/Footer';
import React, { useState } from 'react';
import { AddTodo } from './myComponents/AddTodo';
import {UseStateEx} from './myComponents/UseStateEx'

function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete", todo);
    //does not work like this in react
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this tod: ", title, desc);
    let sno=1;
    if(todos.length>0){
       sno=todos[todos.length-1].sno +1;
    }
    
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to got the market bla bal bla"
    },
    {
      sno: 2,
      title: "Go to the hospital",
      desc: "you need to got the market bla bal bla"
    },
    {
      sno: 3,
      title: "Go to the school",
      desc: "you need to got the market bla bal bla"
    },
    {
      sno: 4,
      title: "Go to the himalaya",
      desc: "you need to got the market bla bal bla"
    }
  ])
  return (
    <>
      <Header searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <UseStateEx />
      <Footer />
    </>
  );
}

export default App;
