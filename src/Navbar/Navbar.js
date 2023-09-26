import React from 'react';
import './Navbar.css';
function Navbar()
{

    return(
        <div className='Navbar'>
            <a href='Főoldal' id='Főoldal'>Főoldal</a> 
            <a href='Kapcsolat' id='Kapcsolat'>Kapcsolat</a>
            <a href='Ügyintézés' id='Ügyintézés'>Ügyintézés</a>
            <a href='GYIK' id='GYIK'>GY.I.K</a>
          
          
            {/*
                     <button className='Login'>Belépés</button>            
          
          */}


        </div>
    );
}

export default Navbar;