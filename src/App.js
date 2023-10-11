
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar/Navbar.js';
import RegisterPage from './RegisterPage/RegisterPage.js';
import LoginPage from './LoginPage/LoginPage.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Footer/Footer.js';
import Content from './Content/Content.js';
import UserAccount from './UserAccount/UserAccount.js';
import './App.css';
import { useEffect } from 'react';
import axios, {AxiosResponse } from 'axios';


function App() {

  useEffect(() => {
    axios.get('https://localhost:7009/WeatherForecast')    //linkelés front end back end egyszerű példa
    .then((response) => {console.log(response.data); 
    });
}, []);
  
  return (
    <div className="App">
      <div>
       <BrowserRouter>
         <Routes>
             <Route path='/' element={[<Navbar/>,<Content/>,<LoginPage/>,<Footer/>]} />
             <Route path='/register'  element={[<Navbar/>,<Content/>,<RegisterPage/>, <Footer/>]}/>
             <Route path='/UserAccount' element={<UserAccount/>}/>
         </Routes>
        </BrowserRouter>
      </div> 
    </div>
  
  );
}

export default App;
