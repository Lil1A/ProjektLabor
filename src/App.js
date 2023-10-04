
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar/Navbar.js';
import RegisterPage from './RegisterPage/RegisterPage.js';
import LoginPage from './LoginPage/LoginPage.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <div>
      <Navbar/>   
       <BrowserRouter>
         <Routes>
             <Route path='/' element={<LoginPage/> }/>
             <Route path='/register' element={<RegisterPage/> } />
         </Routes>
        </BrowserRouter>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
