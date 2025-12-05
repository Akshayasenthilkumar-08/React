import React, { useState } from 'react'

const Login = () => {

    const[sname,setSname]=useState("")
    const[spass,setSpass]=useState("")

  function handleSubmit(){
    const names=localStorage.getItem("name")
    const passes=localStorage.getItem("pass")

    if(names==sname && passes==spass){
      console.log("yes")
    }
    else{
      alert("Username or Password is Wrong!!Please Try again..")
    }
  }

  return (
    <div className='login'>
        <h2>Login</h2>
      <input type="text" placeholder='Enter the Username'
      value={sname}
      onChange={(e)=>setSname(e.target.value)}/>
      <input type="password" placeholder='Enter the Password' 
      value={spass}
      onChange={(e)=>setSpass(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
