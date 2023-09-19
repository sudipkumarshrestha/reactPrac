import React from 'react'
import { Todoitem } from '../myComponents/TodoItems'

export const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin:"10px auto"
  }
  return (
    <div className='container'>
      <h3 className='text-center'>
        Todos List
      </h3>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
          return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })
      }

    </div>
  )
}
