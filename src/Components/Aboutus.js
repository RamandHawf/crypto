import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

import "./about.css";
// import exampleGif from './example.gif';

const Aboutus = () => {
  const matches = useMediaQuery('(max-width: 678px)');
  let animation ="https://i.gifer.com/SVKl.gif"; 
  return (
    <div className="aboutparent">
      <div className="logoup">
        <div className="pic">
          <img src="top.png" alt="top" />
        </div>
      </div>

      <div className="middlebodydata">
        <div className="videodata"  >

        <img src={animation} alt="Example GIF"    style={matches === true  ? 
        { width:"400px",height:"300px" }
        : {  width:"85%",height:"85%" }
        } />

        </div>
        <div className="textdata">
          <div className="a">About Us</div>
          <div className="b">What Is optimos ?</div>
          <div className="c">
            Optimos offer music artists the ability to connect with each other
            along with investors and digitally exchange NFTs for their with
            in.....
          </div>
        </div>
    
      </div>
          <div className="logobottom12">
        <div className="pic">
          <img src="top.png" alt="top" />
        </div>
      </div>

   
      <div className="documentData">
        <div className="dd1">
          <div className="dd1child-pf1">
            <h1 className="hedaingofdocument"> Document </h1>
          </div>

          <div className="dd1child-pf2">
            <h1 className="hedaingofdocumentdetail">
              {" "}
              Document the whote paper and learn about the optimos Token, The
              Unique ICO Crypto Approach and the Team/Advisors.{" "}
            </h1>
          </div>
  
        </div>
      </div>

      <div className="parent">
		<div className="child">
        <h1 className="ONEPAPER">ONE PAPER</h1>

		</div>
		
		<div className="child">
        <h1 className="whitepaper">WHITE PAPER</h1>

		</div>
		
		<div className="child">
        <h1 className="privacypolicy">PRIVACY POLICY</h1>

		</div>
		<div className="child">
        <h1 className="coins">TERM OF COIN SALES</h1>

		</div>
	</div>

    <div className="logobottom13">
        <div className="pic">
          <img src="top.png" alt="top" />
        </div>
      </div>
  

          <div className="flex-container" >
            <div className  ="left">

            </div>
            <div className  ="mid">
                <p>SUPPORTED BY THE GLOBAL #LUNATIC COOMMUNITY,
                    JOIN A DIVERSE, RAPIDLY GROWING WEB3 WCOSYSTEM
                    PROJECTS ACROSS DEFI, GAMING AND NFTs
                </p>
            </div>
            <div className  ="right"></div>
          
          </div>
          <div className="logobottom14">
        <div className="pic">
          <img src="top.png" alt="top" />
        </div>
      </div>
          
    </div>
  );
};

export default Aboutus;
