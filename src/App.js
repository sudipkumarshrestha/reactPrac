import './App.css';
import Header from './myComponents/Header';
import { Todos } from './myComponents/Todos';
import { Footer } from './myComponents/Footer';
import React, { useState } from 'react';
import { AddTodo } from './myComponents/AddTodo';
import { UseStateEx } from './myComponents/UseStateEx'
import { StatePrac } from './myComponents/StatePrac'
import { Entries } from './myComponents/Entries'
import { QueryClientProvider, QueryClient } from 'react-query'
import {RQMethod} from './myComponents/ReactQuery'
import {ReactQueryDevtools} from 'react-query/devtools'
import {MutationPrac} from './myComponents/Mutation'

const queryClient = new QueryClient()

function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this tod: ", title, desc);
    let sno = 1;
    if (todos.length > 0) {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
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
    }
  ])
  return (
    <QueryClientProvider client={queryClient}>
      <Header searchBar={false} />
      <MutationPrac />
      <RQMethod />  {/* //reactquery to fetch data */}
     {/*  <Entries /> */}  {/* //traditional way to fetch data */}
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <UseStateEx />
      <StatePrac />
      <RQMethod />
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
