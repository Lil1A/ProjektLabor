import React from 'react';
import './Navbar.css';
function Navbar()
{

    return(
        <div className='Navbar'>
            <a href='Főoldal'>Főoldal</a> 
            <a href='Kapcsolat'>Kapcsolat</a>
            <a href='Ügyintézés'>Ügyintézés</a>
            <a href='GYIK'>GY.I.K</a>
            <a href='Reg'>Regisztráció</a>
            <button className='Login'>Belépés</button>
        </div>
    );
}

export default Navbar;