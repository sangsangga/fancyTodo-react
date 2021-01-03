// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Register from './Register'
import Login from './Login'
import MainPage from './MainPage';
import React from "react"

function App() {
  const [access_token, setAccessToken] = React.useState(localStorage.getItem("access_token"))
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Register/>
        <Login/>
        {access_token && <MainPage/>}
      </div>
    </div>
  );
}

export default App;
