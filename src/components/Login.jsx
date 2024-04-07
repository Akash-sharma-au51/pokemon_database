import React, { useState } from 'react'

const Login = () => {
    const[fullname,setfullname] = useState("")
    const[email,setemail] = useState("")
    const [islogin,setislogin] = useState(false)

    const handleclick = (e)=>{
        e.preventDefault()
        setislogin(!islogin)
    }
    
  return (
    <div>
        <div className="container w-25 h-50">
            <h1>{islogin?"The Login form":"The Signup form"}</h1>
        <form>
  <div class="form-group">
  <div class="form-group">
    <label for="exampleInputPassword1">Fullname</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Fullname"/>
  </div>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={handleclick}>{islogin?"Login":"Signup"}</button>
  <p onClick={handleclick} style={{color:"blue",textDecoration:"underline"}}> {islogin?"new user signup":"Already have an account login"} </p>
</form>
        </div>

      
    </div>
  )
}

export default Login
