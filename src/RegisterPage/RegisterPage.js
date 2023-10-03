import React from 'react';
import './RegisterPage.css';

function RegisterPage()
{
    return(
        <div className='RegisterPageWrapper' id='RegisterForm'>
            <div className='RegisterPageInputHolder'>
                <h1>Regisztráció</h1><br></br>
              <input type='email' className='InputHolder' placeholder='Email cím' id='email'></input><br></br>
              <input type='password' className='InputHolder' placeholder='Jelszó' id='password'></input><br></br>
               <button type='submit'>Regisztrálás</button><br></br>
               <a href='LoginPage.js'>Belépés</a>         
            </div>
        </div>
    );

}

export default RegisterPage;