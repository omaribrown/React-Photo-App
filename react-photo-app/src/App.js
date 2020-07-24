import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import Home from './Components/Home'
import Profile from './Components/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Login /> */}
      {/* <Home /> */}
      <Profile />
    </div>
  );
}

export default App;
