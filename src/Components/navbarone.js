import React from 'react';
import './vanbart.css'

const Navbarone = () => {
  return (
    <div className="container">
      <div className="one">
        <img src="BLK.png" alt="BLK"   />
      </div>
      <div className="two">
        <div>About us</div>
        <div>FAQ</div>
        <div>Join Us</div>
        <div>Optimos Docs</div>
      </div>
      <div className="three">
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
