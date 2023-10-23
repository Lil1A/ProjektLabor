import React from 'react';
import './UserAccount.css';
import Records from '../records.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHelmetSafety, faLandmark, faSatelliteDish } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card.js';



const {title, amount} = Records; //json fájllal kommunikálás

function UserAccount()
{
    
    return(
        <div className='UserAccountBody'>
            <div className='UserAccountNavbar'>
                <nav> 
                    <ul>
                        <li><a><FontAwesomeIcon icon={faEnvelope} className='icon'/><span className='navitem'>Utalás</span></a></li>
                        <li><a><FontAwesomeIcon icon={faSatelliteDish} className='icon'/><span className='navitem'>Megtakaritások</span></a></li>
                        <li><a><FontAwesomeIcon icon={faSatelliteDish} className='icon'/><span className='navitem'>Hitelek</span></a></li>
                        <li><a><FontAwesomeIcon icon={faSatelliteDish} className='icon'/><span className='navitem'>Számlabefizetés</span></a></li>
                        <li><a><FontAwesomeIcon icon={faLandmark} className='icon'/><span className='navitem'>Számlatörténet</span></a></li>
                        <li><a><FontAwesomeIcon icon={faSatelliteDish} className='icon'/><span className='navitem'>Zseb</span></a></li>
                        <li><a href='/UserAccount/Cards'>Kártyáim</a></li>
                    </ul>
                </nav>
              
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