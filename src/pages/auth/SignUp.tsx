import React , {useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
    

      const [name , setName] =useState("")
      const [email , setEmail] =useState("")
      const [password , setPassword] =useState("")
      const navigate = useNavigate()
      const handelSubmit = async ()=>{

       
          let item ={name , password , email }
          // console.warn(item)
         
        let result =  await fetch("http://localhost:3000/Auth" ,{
            method : "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
          })
          
          result = await result.json()
          localStorage.setItem("user-info" , JSON.stringify(result));
          navigate('/auth/signin');
          
      }
      
     
  
  return (
    
    <div>
      <h1>Auth</h1>
      <input type="text" onChange={(e) => setName(e.target.value)}  placeholder='name'/>
      <br />
      <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
      <br />
      <input type="text"  onChange={(e) => setPassword(e.target.value)} placeholder='pass'/>
      <br />
      <button onClick={handelSubmit}>Sign UP</button>

    </div>
  )
}

export default SignUp