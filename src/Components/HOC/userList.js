import React, { useEffect, useState } from 'react'
import HOC from './Hoc'

const UserList = ({filter}) => {
  const [users,setUsers]=useState([])
  // const [filter,setFilter]=useState("")

  

  useEffect(()=>{
    const fun=async()=>{
      const response=await fetch("https://jsonplaceholder.typicode.com/users");
      const data=await response.json()
      setUsers(data)
    }
    fun()
  },[])

const userList=users.filter((user)=>{
  const { name } = user;
  return name.indexOf(filter) >= 0;
}).map((val,index)=>{
  return (
    <>
        <p key={index}>{val.name}</p>
    </>
  )
})

  return (
    <>
      {/* <h1>UserList</h1> */}
      {/* <input type='text' placeholder='I am from userListComonent' onChange={(e)=>setFilter(e.target.value)} /> */}
      
      {userList}
    
    </>
   
  )
}

const EnhancedUserList=HOC(UserList,"userList")

export default EnhancedUserList