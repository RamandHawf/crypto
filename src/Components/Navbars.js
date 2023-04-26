import React from "react";
import './navbar-css/navbar.module.css';

const Navbars = () => {
  return (
    <div
      className="container"
      style=
      {{
        width:"100%",
        position:"fixed",
        height: "140px",
        display: "flex",
        flexDirection:'row',
        background: "rgb(31,24,75)",
      
      }}
    >
      <div
        className="one"
        style={{
 
          flex: 1,
        }}
      >
   
          <img
            style={{
         
              marginLeft:"18%",
              marginBottom: "30%"
              
            }}
            src="BLK.png"
            alt="BLK"
          />
      </div>
      <div
        className="two"
        style={{
          flex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "5%",
        }}
      >
        <div
          style={{
            fontFamily: "MuseoModerno",
            color: "white",
            fontSize: "20px",
          }}
        >
          About us
        </div>
        <div
          style={{
            fontFamily: "MuseoModerno",
            color: "white",
            fontSize: "20px",
          }}
        >
          FAQ
        </div>

        <div
          style={{
            fontFamily: "MuseoModerno",
            color: "white",
            fontSize: "20px",
          }}
        >
          Join Us        </div>

        <div
          style={{
            fontFamily: "MuseoModerno",
            color: "white",
            fontSize: "20px",
          }}
        >
          Optimos Docs
        </div>

        
      </div>
      <div
        className="three"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: "30px",
          height:"100%",
        }}
      >
        <img
          style={{
            
            // marginTop: "25%",
            marginTop: "12%",

            height: "10%",
            width: "6%",
          }}
          src="linkedin.png"
          alt="linkedin"
        />
        <img
          style={{
            marginTop: "12%",
          

            height: "10%",
            width: "6%",
          }}
          src="Discord.png"
          alt="Discord"
        />
        <img
          style={{
            marginTop: "12%",


            height: "10%",
            width: "6%",
          }}
          src="messenger.png"
          alt="linkedin"
        />
        <img
          style={{
            marginTop: "12%",

            height: "10%",
            width: "6%",
          }}
          src="twitter.png"
          alt="linkedin"
        />
        <img
          style={{
            // marginTop: "25%",
            marginTop: "12%",

            height: "10%",
            width: "6%",
          }}
          src="arrow.png"
          alt="linkedin"
        />
      </div>
    </div>
  );
};

export default Navbars;
