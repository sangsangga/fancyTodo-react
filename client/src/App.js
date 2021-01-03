// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Register from './Register'
import Login from './Login'
import MainPage from './MainPage';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Register/>
        <Login/>
        <MainPage/>
      </div>
    </div>
  );
}

export default App;
