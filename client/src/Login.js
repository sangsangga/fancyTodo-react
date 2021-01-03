import React from "react"
import GithubLogo from "./assets/img/Octocat.png"

function Login () {
  
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  function postLogin(event) {
    event.preventDefault()
    
    const inputEmail = event.target.email.value
    const inputPassword = event.target.password.value
    setEmail(inputEmail)
    setPassword(inputPassword)
    const data = {
      email,
      password
    }



    fetch("http://localhost:3000/users/login", {
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        localStorage.setItem('access_token', result.token)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div id="notLoggedIn-page">
      <h1>Log In</h1>
      
      <form action="" id="form-login" className="form-group" onSubmit={postLogin}>
        <div className="form-group" >
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input name="email" type="email" className="form-control" id="emailLogin-input" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="passwordLogin-input">Password</label>
          <input name="password" type="password" className="form-control" id="passwordLogin-input" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
      </form>
      
      <div className="login-external" style={{display: "flex"}}>
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
        <div id='githubLogin' style={{marginLeft: "30px"}}>
            <a href="https://github.com/login/oauth/authorize?client_id=e576cf43557f362a6995&scope=user:email">
              <img style={{width: "80px"}} src={GithubLogo} alt=""/>
              Github Login
            </a>
        </div>
      </div>
      Don't have account? <a  href="#">Create account</a>
    </div>
  )
}

export default Login