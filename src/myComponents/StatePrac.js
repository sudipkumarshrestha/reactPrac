import React,{useState} from 'react'
function getInitialValue(){
    console.log('getting initial value');
    return 4;
}

export const StatePrac=()=>{

   const [count,setCount]= useState(()=>getInitialValue())
   const [theme,setTheme]= useState('blue')
   

   function decreaseCount(){
    setCount(count-1);
    setTheme('blue')
   }
   function increaseCount(){
     setCount(count+1);
     setTheme('red')
   }
        return (
            <div className='m-4 p-4' >
            <button onClick={decreaseCount} className=' btn btn-primary'>-</button>
            <span><h1>{count} {theme}</h1></span>
            <button onClick={increaseCount} className='btn btn-primary'>+</button>
            </div>
        )

};
