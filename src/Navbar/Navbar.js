import React from 'react';
import './Navbar.css';
const Navbar = () =>
{

    return(
        <div className='Navbar'>
            <a id='Főoldal'>Főoldal</a> 
            <a id='Contact'>Kapcsolat</a>
            <a id='Ügyintézés'>Ügyintézés</a>
        </div>
    );
}

export default Navbar;