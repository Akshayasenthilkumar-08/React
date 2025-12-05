import React, { useState } from 'react'



const Sign = () => {

    const[name,setName]=useState("")
const[pass,setPass]=useState("")

  function submit(){
    if(name!==" " && pass!=" "){
      alert("Signed in Successfuully!!")
    }
  }

  return (
    <div className='signin'>
       <h2>Sign-In</h2>
       <input type="text"  placeholder='Enter the Username'
       value={name}
       onChange={(e)=>setName(e.target.value)}/>
       {
        localStorage.setItem("name",name)
       }
       <input type="password" placeholder='Enter the Password' 
       value={pass}
       onChange={(e)=>setPass(e.target.value)}/>
       {
        localStorage.setItem("pass",pass)
       }
       <input type="e-mail" placeholder='Enter your mail id'/>

<form>
  <h2>Select Gender:</h2>
  <div className="gender">
  <label>
    <input type="radio" name="gender" value="male" /> Male
  </label>
  <br />
  <label>
    <input type="radio" name="gender" value="female" /> Female
  </label>
  </div>
</form>



       <button onClick={submit}>Submit</button>
    </div>
  )
}

export default Sign
