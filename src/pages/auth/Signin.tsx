import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    
    const navigate = useNavigate()

    const [email , setEmail] =useState("")
    const [password , setPassword] =useState("")
    useEffect(()=>{
        if (localStorage.getItem("user-info")) {
            navigate('/auth/signin');
        }
    },[])
   
    const handelSignIn = async ()=>{
        let item ={ password , email }
        // console.warn(item)
        
        let result = await fetch("http://localhost:3000/Auth" ,{
          method : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });
        
        result = await result.json()

        localStorage.setItem("user-info" , JSON.stringify(result));
        navigate('/auth/signin');
       
    }

  return (
    <div><div>
      <h1>sign In</h1>
      
      <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
      <br />
      <input type="text"  onChange={(e) => setPassword(e.target.value)} placeholder='pass'/>
      <br />
      <button onClick={handelSignIn}>Sign UP</button>

    </div></div>
  )
}

export default Signin