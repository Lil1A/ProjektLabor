import React from 'react';
import './UserAccount.css';

function UserAccount()
{
    return(
        <div className='UserAccountBody'>
               <h4 id='Name'>Hello <label id='AccountUserName'></label></h4>
               <div className='Balance'>
                <p>Az egyenleged:<label id='AccountBalance'></label></p>
               </div>
        </div>
    );
}

export default UserAccount;