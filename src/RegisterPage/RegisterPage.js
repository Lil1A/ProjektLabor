import React from 'react';
import './RegisterPage.css';

function RegisterPage()
{
    return(
        <div className='RegisterPageWrapper'>
            <div className='RegisterPageInputHolder'>
                Nincs még fiókod? Regisztrálj<br></br>
              <input className='InputHolder' placeholder='Email cím' id='email'></input><br></br>
              <input className='InputHolder' placeholder='Jelszó' id='password'></input>
            </div>
        </div>
    );

}
export default RegisterPage;