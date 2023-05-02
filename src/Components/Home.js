import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import useMediaQuery from '@mui/material/useMediaQuery';
import animationsData from "./faq.json";
import "./Home.css";

const Home = () => {
  const matches = useMediaQuery('(max-width: 678px)');
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    setAnimationData(animationsData);
    console.log(animationData);
  }, []);

  return (
    <>
      <div className="container1">
        <div className="one12">
          <div className="code1">CRYPTO CONNECT</div>
          <div className="code2">A NETWORK OF TRUST AND SECURITY</div>
          <div className="code3">
            Crypterium Is The World Most Popular Way To Buy and Sell
            Bitcoin,Etherium and LiteCoin
          </div>
          <button>Read More</button>
          <div className="frame8">
            <div className="eclipse1"></div>
            <div className="eclipse2"></div>
            <div className="eclipse3"></div>
            <div className="eclipse4"></div>

            <div className="communityquantityinf8">
              <h1>47K+</h1>
              <h2>Community members</h2>
            </div>
          </div>
        </div>
        <div className="two12">
          <div className="wrapper" >
          {animationData ? (
            <Lottie
             
              style={matches === true  ? { width: "100%",height:"100%", marginTop: "0px", marginLeft: '0px' }
            : { width: "100%", height:"100%" }
            }
            animationData= {animationData}
            
            />
            ) : (
            "Loading animation..."
          )}
          </div>
        </div>
      </div>
      <div className="third12">
        <div className="withinthird1">Powered By Amazing Investors</div>
      </div>

      <div className="flexforlogoicon">
        <img src="raise.png" alt="raise" />
        <img src="nyter.png" alt="nyter" />
        <img src="renio.png" alt="renio" />
        <img src="xyfinance-2.png" alt="xy-finance" />
      </div>
    </>
  );
};

export default Home;
