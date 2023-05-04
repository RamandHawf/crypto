import React,{useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import './CSS-files/vanbart.css'

const Navbarone = () => {
    const matches = useMediaQuery('(max-width: 678px)');

    console.log("MATCHES ... ", matches);


    const [show,setshow] = useState(true);
   const wrap = ()=>{
    setshow(!show)
   }
    return (
    <div className="container11">
      <div className="one11">
        <img src="BLK.png" alt="BLK"   />
        <a  class="icon" >
    <i  class="fa fa-bars" onClick={wrap} ></i>
  </a>
      </div>
      <div className={matches === true && show === false ? `twohide` : 'two111'}>
        <div  >About us</div>
        <div >FAQ</div>
        <div  >Join Us</div>
        <div  >Optimos Docs</div>
    
      </div>
      <div className={matches === true && show === false ? `twohide` : 'three11'}>
        <img src="linkedin.png" alt="linkedin" />
        <img src="Discord.png" alt="Discord" />
        <img src="messenger.png" alt="messenger" />
        <img src="twitter.png" alt="twitter" />
        <img src="arrow.png" alt="arrow" />
  
      </div>
    </div>
  );
}

export default Navbarone;
