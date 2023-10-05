import React from 'react';
import './Navbar.css';
function Navbar()
{

    return(
        <div className='Navbar'>
            <a href='/' id='Főoldal'>Főoldal</a> 
            <a href='Kapcsolat' id='Kapcsolat'>Kapcsolat</a>
            <a href='Ügyintézés' id='Ügyintézés'>Ügyintézés</a>
        </div>
    );
}

export default Navbar;