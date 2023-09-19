import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title ||!desc)
        alert("Please input both title and description.");

        addTodo(title,desc);
    }

    return (
        <div className='container p-3'>
            <h3>To Do List</h3>
        <form>
            <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1">ToDo Title</label>
                <input type="text" className="form-control" id="title" placeholder="Enter title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1">ToDo Description</label>
                <input type="text" className="form-control" id="desc" placeholder="description" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
            </div>
            <button type="submit" className="btn btn-success" onClick={submit}>Submit</button>
        </form>
        </div>
    )
}
