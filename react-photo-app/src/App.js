import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Login />
    </div>
  );
}

export default App;
