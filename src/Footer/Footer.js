import './Footer.css';

function Footer() {
    return (
      <footer className='footer'>
         <div className='container'>
            <div className='row'>
               <div className='footer-col'>
                  <h4>Cégünk</h4>
                  <ul>
                     <li><a href='#'>Rólunk</a></li>
                     <li><a href='#'>Szolgáltatásaink</a></li>
                     <li><a href='#'>Biztonság</a></li>
                     <li><a href='#'>Programjaink</a></li>
                  </ul>
               </div>
               <div className='footer-col'>
                  <h4>Kapcsolat</h4>
                  <ul>
                     <li><a href='#'>Ebank@gmail.com</a></li>
                    <a href='#'>06707715954</a>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
    );
  }

  export default Footer;
  