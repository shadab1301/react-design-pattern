import React, { useEffect, useState } from 'react'
import HOC from './Hoc'

const TodosList = ({filter}) => {
  const [todos,setTodos]=useState([])
  // const [filter,setFilter]=useState("")

  

  useEffect(()=>{
    const fun=async()=>{
      const response=await fetch("https://jsonplaceholder.typicode.com/todos");
      const data=await response.json()
      setTodos(data.slice(0,10))
    }
    fun()
  },[])

const todosList=todos.filter((todo)=>{
  const { title } = todo;
  return title.indexOf(filter) >= 0;
}).map((val,index)=>{
  return (
    <>
        <p key={index}>{val.title}</p>
    </>
  )
})

  return (
    <>
      {/* <h1>TodosList</h1>
      <input type='text' onChange={(e)=>setFilter(e.target.value)} />
       */}
      {todosList}
    
    </>
   
  )
}
const EnhancedTodosList=HOC(TodosList,"TodoList")
export default EnhancedTodosList