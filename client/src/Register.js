import React from "react"

function Register () {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  function postRegister (event) {
    event.preventDefault()
    const inputEmail = event.target.email.value
    const inputPassword = event.target.password.value
    setEmail(inputEmail)
    setPassword(inputPassword)
    const data = {
      email,
      password
    }

    fetch("http://localhost:3000/users/register", {
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

  }

  
  return (
    <div id="register-page">
      <h1>Register</h1>
      <form action="" id="form-register" onSubmit={postRegister}>
        <div className="form-group" id="form-register">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input name="email" type="email" className="form-control" id="emailRegister-input" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input name="password" type="password" className="form-control" id="passwordRegister-input" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  )
}

export default Register