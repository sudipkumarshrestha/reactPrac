import './App.css';
import Header from './myComponents/Header';
import {Todos} from './myComponents/Todos';
import { Footer } from './myComponents/Footer';
import React,{useState} from 'react';

function App() {
const onDelete=(todo)=>{
  console.log("I am ondelete",todo);
  //does not work like this in react
  // let index=todos.indexOf(todo);
  // todos.splice(index,1);

  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
}
  const [todos,setTodos]=useState([
    {
      sno:1,
      title:"Go to the market",
      desc:"you need to got the market bla bal bla"
    },
    {
      sno:2,
      title:"Go to the hospital",
      desc:"you need to got the market bla bal bla"
    },
    {
      sno:3,
      title:"Go to the school",
      desc:"you need to got the market bla bal bla"
    },
    {
      sno:4,
      title:"Go to the himalaya",
      desc:"you need to got the market bla bal bla"
    }
  ])
  return (
    <>
     <Header searchBar={false}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer />
    </>
  );
}

export default App;
