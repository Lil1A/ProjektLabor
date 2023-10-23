import React from 'react';
import './UserAccount.css';
import Records from '../records.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card.js';



const {title, amount} = Records; //json fájllal kommunikálás



function UserAccount()
{
    
    return(
        <div className='UserAccountBody'>
            <div className='UserAccountNavbar'>
                <ul>
                    <li><a>Utalás <FontAwesomeIcon icon={faLayerGroup} /></a></li>
                    <li><a>Megtakaritások</a></li>
                    <li><a>Hitelek</a></li>
                    <li><a>Számlabefizetés</a></li>
                    <li><a>Számlatörténet</a></li>
                    <li><a>Széf</a></li>
                    <li><a>Zseb</a></li>
                    <li><a href='/UserAccount/Cards'>Kártyáim</a></li>
                </ul>
            </div>
               <h4 id='Name'>Üdvözöljük, <label id='AccountUserName'>{Records[1].title} 👋</label></h4>
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