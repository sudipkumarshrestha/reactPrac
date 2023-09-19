import React,{useState} from 'react';

export const UseStateEx = () => {
  const [count,setCount]=useState(0);
  return (
    <div>
        <p> You clicked {count}</p>
        <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}

