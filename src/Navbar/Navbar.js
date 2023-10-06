import React from 'react';
import './Navbar.css';
const Navbar = () =>
{

    return(
        <div className='Navbar'>
            <a href='/' id='Főoldal'>Főoldal</a> 
            <a href='#Contact'>Kapcsolat</a>
            <a href='Ügyintézés' id='Ügyintézés'>Ügyintézés</a>
        </div>
    );
}

export default Navbar;