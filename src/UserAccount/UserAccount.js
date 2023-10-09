import React from 'react';
import './UserAccount.css';
import Records from '../records.json';

const {title, amount} = Records; //json fájllal kommunikálás

function UserAccount()
{
    return(
        <div className='UserAccountBody'>
            <div className='UserAccountNavbar'>
                <ul>
                    <li><a>Utalás</a></li>
                    <li><a>megtakaritások</a></li>
                    <li><a>Hitelek</a></li>
                    <li><a>Számlabefizetés</a></li>
                    <li><a>Számlatörténet</a></li>
                </ul>
            </div>
               <h4 id='Name'>Hello <label id='AccountUserName'>{Records[2].title}</label></h4>
               <div className='BalanceWrapper'>
                <div className='Balance'>
                    <p>Az egyenleged:<label id='AccountBalance'>{Records[2].amount}</label></p>
                </div>
               </div>
              
        </div>
    
    );
}

export default UserAccount;