import React from 'react'
import {Todoitem} from '../myComponents/TodoItems'

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center'>
        Todos List
      </h3>
      {props.todos.map((todo)=>{
        return( 
        <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
      )
      })}
      
      </div>
  )
}
