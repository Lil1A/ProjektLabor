import React from 'react';
import './LoginPage.css';

function LoginPage()
{
    return(
        <div className='LoginPageWrapper' id='LoginForm'>
            <div className='LoginPageInputHolder'>
                <h1>Belépés</h1><br></br>
              <input type='email' className='InputHolder' placeholder='Email cím' id='email'></input><br></br>
              <input type='password' className='InputHolder' placeholder='Jelszó' id='password'></input><br></br>
               <button type='submit'>Belépés</button><br></br>
               <a>Elfelejtetted a jelszavad?</a><br></br>
               <a href='RegisterPage'>Regisztráció</a>         
            </div>
        </div>
    );

}
export default LoginPage;