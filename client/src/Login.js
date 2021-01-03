import React from "react"
import GithubLogo from "./assets/img/Octocat.png"

function Login () {

  return (
    <div id="notLoggedIn-page">
      <h1>Log In</h1>
      
      <form action="" id="form-login" className="form-group">
        <div className="form-group" >
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="emailLogin-input" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="passwordLogin-input">Password</label>
          <input type="password" className="form-control" id="passwordLogin-input" placeholder="Password"/>
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