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
                    <li><a>Megtakaritások</a></li>
                    <li><a>Hitelek</a></li>
                    <li><a>Számlabefizetés</a></li>
                    <li><a>Számlatörténet</a></li>
                </ul>
            </div>
               <h4 id='Name'>Üdvözöljük, <label id='AccountUserName'>{Records[1].title}</label></h4>
               <div className='BalanceWrapper'>
                <div className='Balance'>
                    <p className='BalanceP'>Az egyenleged:<label id='AccountBalance'> {Records[1].amount} Ft</label></p>
                </div>
               </div>
               <div className='History'>
                   <h4><label>Számlatörténet</label></h4>
               </div>
              
        </div>
    
    );
}

export default UserAccount;