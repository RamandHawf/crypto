import React,{useEffect,useState} from 'react';
import Lottie from "lottie-react";
import animationsData from "./main.json";

const Home = () => {
  const [animationData, setAnimationData] = useState(null);

  
  useEffect(() => {
    setAnimationData(animationsData);
    console.log(animationData)
    
  }, []);


    return (
<>
        <div
        className="container1"
        style={{
          display: "flex",
          flexDirection: "row",
          // marginTop: "120px",
          height: "100%",
          width: "100%",
          backgroundColor: "#1b192f",
        
          background: "rgb(27,25,47)",
        
        }}
      >
        <div className="one" style={{ width: "45%", height: "632px" }}>
          <div
            className="code1"
            style={{
              position: "absolute",
              width: "60%",
              height: "57px",
              color: "#883BDE",
              left: "86px",
              top: "210px",
              fontFamily: "Museomoderno",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "36px",
              lineHeight: "57px",
              display: "flex",
              alignItems: "center",
              textTransform: "uppercase",
            }}
          >
            CRYPTO CONNECT
          </div>
          <div
            className="code2"
            style={{
              position: "absolute",
              width: "40%",
              height: "112px",
              left: "86px",
              top: "267px",

              fontFamily: "MuseoModerno",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "48px",
              lineHeight: "56px",
              /* or 117% */

              display: "flex",
              alignItems: "center",
              textTransform: "uppercase",

              color: "#FFFFFF",
            }}
          >
            A NETWORK OF TRUST AND SECURITY
          </div>
          <div
            className="code3"
            style={{
              position: "absolute",
              width: "574px",
              height: "76px",
              left: "80px",
              top: "403px",

              fontFamily: "MuseoModerno",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "38px",
              display: "flex",
              alignItems: "center",
              textTransform: "capitalize",

              color: "#FFFFFF",
            }}
          >
            Crypterium Is The World Most Popular Way To Buy and Sell
            Bitcoin,Etherium and LiteCoin
          </div>
          <button
            style={{
              position: "absolute",
              width: "173px",
              height: "60px",
              left: "80px",
              top: "519px",
              outline:"none",
              border : "0px",

              background:
                "linear-gradient(68.58deg, #883BDE 9%, #88D5DE 97.66%)",
              boxShadow: "0px 4px 20px rgba(224, 50, 91, 0.09)",
              borderRadius: "10px",
            }}
          >
            Read More
          </button>
          <div
            className="frame8"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px",
              gap: "16px",

              position: "absolute",
              width: "281px",
              height: "46px",
              left: "80px",
              top: "619px",
            }}
          >
            <div
              className="eclispe1"
              style={{
                width: "40px",
                height: "40px",

                background: "url(), #D9D9D9",
                border: "1px solid #FFFFFF",

                /* Inside auto layout */
                borderRadius: "50%",
                flex: "none",
                order: 0,
                flexGrow: 0,
                margin: "0px -20px",
              }}
            ></div>
            <div
              className="eclispe2"
              style={{
                width: "40px",
                height: "40px",

                background: "url(), #D9D9D9",
                border: "1px solid #FFFFFF",

                /* Inside auto layout */
                borderRadius: "50%",
                flex: "none",
                order: 0,
                flexGrow: 0,
                margin: "0px -20px",
              }}
            ></div>
            <div
              className="eclispe3"
              style={{
                width: "40px",
                height: "40px",

                background: "url(), #D9D9D9",
                border: "1px solid #FFFFFF",

                /* Inside auto layout */
                borderRadius: "50%",
                flex: "none",
                order: 0,
                flexGrow: 0,
                margin: "0px -20px",
              }}
            ></div>
                        <div
              className="eclispe4"
              style={{
                width: "40px",
                height: "40px",

                background: "url(), #D9D9D9",
                border: "1px solid #FFFFFF",

                /* Inside auto layout */
                borderRadius: "50%",
                flex: "none",
                order: 0,
                flexGrow: 0,
                margin: "0px -20px",
              }}
            ></div>
         

         <div className='communityqunatityinf8' 
          style={{
            display: "flex",
            marginLeft:'10px',
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0px",
            width: "147px",
            height: "46px",
            flex: "none",
            order: "1",
            flexGrow: "0"
          }}>

<h1 style={{
           width: "57px",
           height: "38px",
           
           fontFamily: 'MuseoModerno',
           fontStyle: "normal",
           fontWeight: "700",
           fontSize: "24px",
           lineHeight: "38px",
           display: "flex",
           alignItems: "center",
           
           color: "#FFFFFF",
           
           
           /* Inside auto layout */
           
           flex: "none",
           order: 0,
           flexGrow: 0,
           margin: "-14px 0px",
          }}>
         47K+
          </h1>
          <h2 style={{
           width: "147px",
           height: "22px",
           
           fontFamily: 'MuseoModerno',
           fontStyle: "normal",
           fontWeight: "400",
           fontSize: "14px",
           lineHeight: "22px",
           display: "flex",
           alignItems: "center",
           
           color: "#FFFFFF",
           
           
           /* Inside auto layout */
           
           flex: "none",
           order: 0,
           flexGrow: 0,
        //    margin: "-14px 0px",
          }}>
         Community members
          </h2>


          </div>

          </div>
          
         
        </div>
        <div
          className="two"
          style={{ width: "55%", height: "632px" }}
        >
          {/* {animationData} */}
                {animationData ? <Lottie  animationData={animationData} /> : 'Loading animation...'}

          {/* CRYPTO CONNECT */}
        </div>




      </div>
    <div className='third' style={{
      // marginBottom:"110px",
  backgroundColor: "#1b192f",
  background: "rgb(27,25,47)",
  background: "linear-gradient(90deg, rgba(27,25,47,1) 48%, rgba(27,25,47,1) 73%, rgba(27,25,47,1) 77%, rgba(44,48,94,1) 100%, rgba(0,212,255,1) 100%)",
// position: "absolute",
        width: "100%",
        height: "200px",
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        // left: "4px",
        // top: "776px",
    }} >
<div className='withinthird1' style={{
  marginTop:"px",
    width: "246px",
    height: "25px",
    // left: "593px",
    // top: "0px",
    
    fontFamily: 'MuseoModerno',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "25px",
    // display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    
    color: "#FFFFFF",
    // marginBottom:"110px"
}}>
Powered By Amazing Investors
</div>

 

    </div>

    <div style={{
        height:"100px",      
      // marginBottom:"50px",
        backgroundColor: "#1b192f",
        background: "rgb(27,25,47)",
        background: "linear-gradient(90deg, rgba(27,25,47,1) 48%, rgba(27,25,47,1) 73%, rgba(27,25,47,1) 77%, rgba(44,48,94,1) 100%, rgba(0,212,255,1) 100%)",
    }}>
<div className='flexforlogoicon' style={{
    // marginTop:"50px",
    display:"flex",
    flexDirection:"row",
    height:"54px",
    width:"344px",
    marginLeft:"349.18px"
}}
 >
    <img src="raise.png" alt="raise" style={{
        
        height:"54px",
        width:"139.1px"
    }} />

<img src="nyter.png" alt="nyter" style={{
       marginLeft:'56px',
       height:"54px",
        width:"81.84px"
}} />

<img src="renio.png" alt="renio" style={{
       marginLeft:'56px',
       height:"54px",
        width:"192.30px"
}} />

<img src="xyfinance-2.png" alt="xy-finance" style={{
       marginLeft:'56px',
       height:"54px",
        width:"162px"
}} />
</div>
</div>
      </>
    );
}

export default Home;
