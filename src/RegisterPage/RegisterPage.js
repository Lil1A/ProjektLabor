import React from 'react';
import './RegisterPage.css';

function RegisterPage()
{
    return(
        <div className='RegisterPageWrapper'>
            <div className='RegisterPageInputHolder'>
                <h1>Belépés</h1><br></br>
                <input placeholder='Vezetéknév' className='InputHolder2'></input>
            <input placeholder='Keresztnév' className='InputHolder2'></input>
              <input type='email' className='InputHolder' placeholder='Email cím' id='email'></input><br></br>
              <input type='password' className='InputHolder' placeholder='Jelszó' id='password'></input><br></br>
               <button type='submit'>Belépés</button>            
            </div>
        </div>
    );

}
export default RegisterPage;