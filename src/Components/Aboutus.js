import React,{useState,useEffect} from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import Lottie from "lottie-react";

import {
   heaading_one_aboutus_component, heaading_two_aboutus_component, paragraph_aboutus_component,
  
  
    heading_three_aboutus_component,
  
  
   paragraph_two_aboutus_component,
  
   paragraph_three_aboutus_component
 

} from './Contentdata'

// import leftData from "./leftdata.json";
import leftData from "./animations/leftdata.json";

// import rightData from "./rightdata.json";
import rightData from "./animations/rightdata.json";


import "./CSS-files/about.css";
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
      {/* <div className="logoup">
        <div className="pic">
          <img src="top.png" alt="top" />
        </div>
      </div> */}

      <div className="middlebodydata">
        <div className="videodata"  >

        <img src={animation} alt="Example GIF"    style={matches === true  ? 
        { marginLeft:"-170px",width:"270px",height:"240px" }
        : {  width:"85%",height:"85%" }
        } />

        </div>
        <div className="textdata">
          <div className="a">{heaading_one_aboutus_component}</div>
          <div className="b">{heaading_two_aboutus_component}</div>
          <div className="c">
           {paragraph_aboutus_component}
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
            <h1 className="hedaingofdocument"> {heading_three_aboutus_component} </h1>
          </div>

          <div className="dd1child-pf2">
            <h1 className="hedaingofdocumentdetail">
              {" "}
              {paragraph_two_aboutus_component}
              {" "}
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
                <p>
                  {paragraph_three_aboutus_component}
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
