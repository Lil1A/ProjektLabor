
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar/Navbar.js';
import RegisterPage from './RegisterPage/RegisterPage.js';
import LoginPage from './LoginPage/LoginPage.js';

function App() {
  return (
    <div className="App">
       <Navbar/>       
      <RegisterPage/> 
      <LoginPage/>
       
    </div>
  );
}

export default App;
