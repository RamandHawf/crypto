import React,{useState,useEffect} from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import Lottie from "lottie-react";

import leftData from "./leftdata.json";
import rightData from "./rightdata.json";

import "./about.css";
// import exampleGif from './example.gif';

const Aboutus = () => {
  const [animationDataleft, setAnimationDataleft] = useState(null);
  const [animationDataright, setAnimationDataright] = useState(null);


  useEffect(() => {
    setAnimationDataleft(leftData);
    setAnimationDataright(rightData);

    // console.log(animationData)
    
  }, []);
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
        { marginLeft:"-100px",width:"270px",height:"240px" }
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

      <div className="parentk">
		<div className="childk">
        <h1 className="ONEPAPER">ONE PAPER</h1>

		</div>
		
		<div className="childk">
        <h1 className="whitepaper">WHITE PAPER</h1>

		</div>
		
		<div className="childk">
        <h1 className="privacypolicy">PRIVACY POLICY</h1>

		</div>
		<div className="childk">
        <h1 className="coins">TERM OF COIN SALES</h1>

		</div>
	</div>

    <div className="logobottom13">
        
          <img src="top.png" alt="top" />
      </div>
  

          <div className="flex-container" >
            <div className  ="left">
   <div className ="wrapperleft" >
   {/* {animationDataleft ? <Lottie  animationData={animationDataleft}  style={{width:"100%" ,height:"100%"  }}  /> : 'Loading animation...'} */}

   </div>
            </div>
            <div className  ="mid">
                <p>SUPPORTED BY THE GLOBAL #LUNATIC COOMMUNITY,
                    JOIN A DIVERSE, RAPIDLY GROWING WEB3 WCOSYSTEM
                    PROJECTS ACROSS DEFI, GAMING AND NFTs
                </p>
            </div>
            <div className  ="right">
           <div className="wrapperright" ></div>
           {/* {animationDataright ? <Lottie  animationData={animationDataright}  style={{width:"200px" ,height:"200px"}}  /> : 'Loading animation...'} */}
            </div>
            {/* {animationDataright ? <Lottie  animationData={animationDataright} /> : 'Loading animation...'} */}
          
          </div>
          <div className="logobottom14">

          <img src="top.png" alt="top" />
       
      </div>
          
    </div>
  );
};

export default Aboutus;
