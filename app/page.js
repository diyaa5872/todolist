"use client"
import React, { useState } from 'react'

const page = () => {
  const [title,settitle]=useState("")
  const [desc,setdesc]=useState("")
  const [mainTask,setMainTask]=useState([]);
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask,{title,desc}]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  }

  let renderTask= <h2>No Task Available</h2>

  renderTask=mainTask.map((t,i) => {
    return(
     <div className='flex justify-between'>
      <h5>{t.title}</h5>
      <h6>{t.desc}</h6>
    </div>
    );
  });

  return (
    <>
    <h1 className='bg-gray-800 text-white p-5 text-5xl font-bold text-center'>Diya's todolist</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2' placeholder='Enter Title Here' value={title} onChange={(e)=>{
        settitle(e.target.value)
      }} />
      <input type="text" className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2' placeholder='Enter Description Here' value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }} />
      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded my-20'>Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page
