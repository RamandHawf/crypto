import React,{useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from '@mui/material/useMediaQuery';

import Lottie from "lottie-react";
// import useMediaQuery from '@mui/material/useMediaQuery';
// 

// import animationsData from "./databottom.json";

import animationsData from "./animations/databottom.json";

import './CSS-files/join.css'
const useStyles = makeStyles((theme) => ({
  container: {
    // width:"100%",
    height: "100%",
    backgroundColor: "#1b192f",
    background: "rgb(27,25,47)",
    background: "linear-gradient(90deg, rgba(27,25,47,1) 48%, rgba(27,25,47,1) 73%, rgba(27,25,47,1) 77%, rgba(44,48,94,1) 100%, rgba(0,212,255,1) 100%)",
    [theme.breakpoints.down("sm")]: {

      flexDirection: "column",
      justifyContent:"center"
    },
  },
  box: {
    width:"auto", 
    display:"flex",
    height: 500,
    [theme.breakpoints.down("xs")]: {
      width:"auto", 
      height: "auto",
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent:"center",
      width:"auto"
    },
  },
  box1: {
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      height: '747px',
      // flex: "none",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {

     height:"auto",
     width:"auto"
    },
  },
  box2: {
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      height: '747px',

      flex: "none",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {

      height:"auto",
      width:"auto"
     },
  },
}));

function Join() {
  const matches = useMediaQuery('(max-width: 678px)');

  const classes = useStyles();
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    setAnimationData(animationsData);
    console.log(animationData)
    
  }, []);
  return (
    <Grid container  className={classes.container}>
      <Grid item xs={12} sm={6} className={classes.box1}>
        <div className={classes.box} style={{ backgroundColor: "" }}>
          <div className="joined" style={ matches ===true ? { 
             marginTop: '10px', display: "flex",
            flexDirection: 'column', justifyContent: 'center',
            alignItems:"center",
            backgroundColor: "",
            width:"auto",
           
            height: "auto"
          }: { 
            marginLeft: '190px', marginTop: '121px', display: "flex",
            flexDirection: 'column', justifyContent: 'flex-start',
            backgroundColor: "#1b192f",
           
            height: "320px", width: '572px'
          }    }>
            <h1
              style={matches === true ? 
                {
                  // textAlign:"center",
                  fontFamily: 'MuseoModerno',
                  fontStyle: "normal",
                  fontWeight: "300",alignItems:"center",
                  fontSize: "38px",
                  lineHeight: "46px",
  

                  textTransform: "capitalize",
  
                  color: "#FFFFFF",
                } : {
                  // textAlign:"center",
                  fontFamily: 'MuseoModerno',
                  fontStyle: "normal",
                  fontWeight: "700",justifyContent:"center",
                  fontSize: "48px",
                  lineHeight: "56px",
  
                  display: "flex",
  
                  alignItems: "center",
                  textTransform: "capitalize",
  
                  color: "#FFFFFF",
                }}
            >Join Our community</h1>

            <p style={matches === true ? {
              margin:"20px",
              fontFamily: 'MuseoModerno',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "25px",

              display: "flex",
              justifyContent:"center",
              alignItems: "center",
              textTransform: "capitalize",

              color: "#FFFFFF",
            } : {
              fontFamily: 'MuseoModerno',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "25px",

              display: "flex",
              justifyContent:"center",
              alignItems: "center",
              textTransform: "capitalize",

              color: "#FFFFFF",
            } } >1122
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quas,
              est dignissimos iste accusamus corporis error,
              nisi reprehenderit molestias odit impedit, pariatur quod. Facilis ducimus,
              mollitia nulla perferendis similique cum!

            </p>
            <button
              style={matches===true ? 
                {
                  margin: 0,
                  padding: 0,
                  background: "linear-gradient(68.58deg, #883BDE 9%, #88D5DE 97.66%)",
                  boxShadow: "0px 4px 20px rgba(224, 50, 91, 0.09)",
                  borderRadius: "10px", 
                  marginRight:"230px",
                  height: "40px",
                  width:"150px",
                  justifyContent:"flex-start",
                  alignContent:"flex-start",
                  alignItems:"flex-start",
                  color:"white",
                  fontFamily: 'MuseoModerno',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "25px",
                  // height:"40px",
                } : 
                {
                  margin: 0,
                  padding: 0,
                  background: "linear-gradient(68.58deg, #883BDE 9%, #88D5DE 97.66%)",
                  boxShadow: "0px 4px 20px rgba(224, 50, 91, 0.09)",
                  borderRadius: "10px", width: "203px",
                  height: "60px",
                  color:"white",
                  fontFamily: 'MuseoModerno',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "25px",
                }}
            >Join Community</button>

          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.box2}>
        <div className={classes.box} style={{ backgroundColor: "" }}>
          {/* <div></div> */}
          {animationData ? <Lottie  animationData={animationData}  style={matches===true?{
            marginLeft:"0px"
          }:{
            marginLeft:"80px"

          }}   /> : 'Loading animation...'}

        </div>
      </Grid>

      <div className="footer"
        style=
        {matches ===true ? {
          marginTop: '172px', height: "auto", width: 'auto',
          background: "rgb(39,37,52)",
          background: "linear-gradient(90deg, rgba(39,37,52,1) 100%, rgba(1,5,64,1) 100%)",
          display: "flex",
          flexDirection: 'column',
          justifyContent:"flex-start"
          // justifyContent:"fle",
        
        }
        :
        {
          marginTop: '172px', height: "297px", width: '100%',
          background: "rgb(39,37,52)",
          background: "linear-gradient(90deg, rgba(39,37,52,1) 100%, rgba(1,5,64,1) 100%)",
          display: "flex",
          flexDirection: 'row'
        }} >
        <div className="footone"
          style={matches===true ? { width:"auto",height:"auto" } :{ flex: "1" }} >
          <h1 style={
            matches===true ?
            {
              marginLeft:"20px",
              padding: 0,
              // marginLeft: '82px',
              marginTop: "80px",
              fontFamily: 'MuseoModerno',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "30px",

              textTransform: "capitalize",

              color: "#FFFFFF",

              opacity: "0.8",

            } :
            {
              padding: 0,
              marginLeft: '82px',
              marginTop: "80px",
              fontFamily: 'MuseoModerno',
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "30px",

              textTransform: "capitalize",

              color: "#FFFFFF",

              opacity: "0.8",

            }} > Don't miss out, Stay Updated </h1>
          <p
            style={matches === true ? {
              width:"auto",
              // margin:"20px",
              // marginLeft:"90px",
              
              fontFamily: 'MuseoModerno',
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "16px",
              lineHeight: "20px",
              marginLeft:"20px",


              color: "#F6F6F6",

              opacity: "0.8",
            }:{
              marginLeft: "82px",
              fontFamily: 'MuseoModerno',
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "26px",


              color: "#F6F6F6",

              opacity: "0.8",
            }}
          > Don't hesitate to subscribe to latest news about optimus </p>

          <div style={matches===true ? {
            width: "auto",
            marginLeft:"20px",
            marginRight:"20px",
            height: "46px",
            display:"flesx",
            flexDirection:"row", 
            // justifyContent:"center",
            // alignItems:"center",
            borderRadius: "10px",

           
            backgroundColor: 'white',
          } :
          {
            width: "464px",
            height: "46px",

            borderRadius: "10px",
            marginLeft: "81px",
            backgroundColor: 'white',
          }} >
            <input type="text"
              style={matches === true ?{
                marginTop:"5px",
                fontSize: '20px',
                fontFamily: 'MuseoModerno',
                height: "36px",
                width: "auto",
                background: "#FFFFFF",
                color: 'black',
                // backgroundColor:"silver",
                opacity: 0.8,
                borderRadius: "10px",
                border: '0px solid',
                outline: 'none'

              } :{
                fontSize: '20px',
                fontFamily: 'MuseoModerno',
                height: "36px",
                width: "300px",
                background: "#FFFFFF",
                color: 'black',
                opacity: 0.8,
                borderRadius: "10px",
                border: '0px solid',
                outline: 'none'

              }}
            />
            <button style={
              matches===true ? {
                marginTop: '2px',
                marginRight: '2px',
                verticalAlign: 'center',
                float: 'right',
                paddingLeft:"3px",
                paddingRight:"3px",

                height: "42px",
                width: 'auto',
                fontFamily: 'MuseoModerno',
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "22px",

                textTransform: "capitalize",


                color: "#FFFFFF",
                border: '0px solid',
                outline: 'none',

                background: "linear-gradient(68.58deg, #883BDE 9%, #88D5DE 97.66%)",
                borderRadius: "10px",
              }:{
                marginTop: '2px',
                marginRight: '2px',
                verticalAlign: 'center',
                float: 'right',

                height: "42px",
                width: '156px',
                fontFamily: 'MuseoModerno',
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "22px",

                textTransform: "capitalize",


                color: "#FFFFFF",
                border: '0px solid',
                outline: 'none',

                background: "linear-gradient(68.58deg, #883BDE 9%, #88D5DE 97.66%)",
                borderRadius: "10px",
              } } >Subscribe</button>
          </div>


        </div>
        <div className="foottwo"
          style={matches===true ? { width:"auto",height: "auto", display:"flex" ,
        flexDirection:"column"
        } : { flex: "1" }}
        >
          <p style={matches===true ?{
            // width:"300px",
            marginTop: '60px',
            fontFamily: 'MuseoModerno',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "26px",
            /* or 162% */ 
            marginLeft: "20px",
            marginRight:"20px",

            // width: '460px',
            height: '78px',
            color: "#F6F6F6",

            opacity: "0.8",



          } :
          {
            marginLeft: "115px", marginTop: '60px',
            fontFamily: 'MuseoModerno',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "26px",
            /* or 162% */

            width: '460px',
            height: '78px',
            color: "#F6F6F6",

            opacity: "0.8",



          } } >Don't hesitate to subscribe to latest news about optimos
            predict as well as crucial financial knowledge to become
            successful investors globally
          </p>
          <div className="icons social media"
            style={matches===true ?{
              display: 'flex',
              flexDirection: 'row',
              justifyContent:"center"
              
            } : {
              display: 'flex',
              flexDirection: 'row',
              justifyContent:"center"
            }}
          >
            <div style={ matches===true ? {
              marginTop:"20px"
              //  marginLeft: '121px'
            }: { } }>

              <img style={{
                // backgroundColor:'white'
              }} src="twitter.png" alt="twitterico" />
              <img src="Discord.png" alt="Discordico"

              />
              <img src="arrow.png" alt="arrowico" />
              <img src="m.png" alt="mico"
              />
              <img src="messenger.png" alt="messengerico"

              />
              <img src="linkedin.png" alt="lnkedinico" style={{ height: '18px', width: '18px' }} />

            </div>
          </div>

        </div>

      </div>

      <div className="last" style={{
          backgroundColor: "#1b192f",
          background: "rgb(39,37,52)",
          background: "linear-gradient(90deg, rgba(39,37,52,1) 100%, rgba(1,5,64,1) 100%)",
        height: '46px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'

      }}>
        <div style={{
          fontFamily: 'MuseoModerno',
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "22px",

          textAAlign: "center",

          color: "#FFFFFF"
        }} >2022 : All Right Reserved by optimos</div>

      </div>
    </Grid>
  );
}

export default Join;
