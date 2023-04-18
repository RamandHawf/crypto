import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height:"690px",
    backgroundColor:"#1E1E1E",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  box: {
    height: 500,
    [theme.breakpoints.down("xs")]: {
      
        height: "747px",
      marginBottom: theme.spacing(2),
    },
  },
  box1: {
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      height:'747px',
        flex: "none",
      width: "100%",
    },
  },
  box2: {
    flex: 1,
    [theme.breakpoints.down("xs")]: {
        height:'747px',
     
        flex: "none",
      width: "100%",
    },
  },
}));

function Joinus() {
  const classes = useStyles();

  return (
    <Grid  container spacing={2} className={classes.container}>
      <Grid item xs={12} sm={6} className={classes.box1}>
        <div className={classes.box} style={{ backgroundColor: "" }}>
          Box 1
          <div className="joined" style={{marginLeft:'190px',marginTop:'121px',display:"flex",
          flexDirection:'column',justifyContent:'flex-start',
          backgroundColor:'',
          height:"320px",width:'572px'}}>
                 <h1
                   style={{
                    fontFamily: 'MuseoModerno',
fontStyle: "normal",
fontWeight: "700",
fontSize: "48px",
lineHeight: "56px",

display: "flex",
alignItems: "center",
textTransform: "capitalize",

color: "#FFFFFF",
                   }}
                 >Join Our community</h1>
				
                 <p style={{
                    fontFamily: 'MuseoModerno',
fontStyle: "normal",
fontWeight: "400",
fontSize: "16px",
lineHeight: "25px",

display: "flex",
alignItems: "center",
textTransform: "capitalize",

color: "#FFFFFF",
                   }} >
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quas, 
                 est dignissimos iste accusamus corporis error,
                  nisi reprehenderit molestias odit impedit, pariatur quod. Facilis ducimus,
                  mollitia nulla perferendis similique cum!

                 </p>
                 <button
                 style={{
                    margin:0,
                    padding:0,
                    background: "linear-gradient(68.58deg, #883BDE 9%, #88D5DE 97.66%)",
                    boxShadow: "0px 4px 20px rgba(224, 50, 91, 0.09)",
                    borderRadius: "10px",  width: "203px",
                    height: "60px" 
                 }}
                 >Join Community</button>

          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.box2}>
        <div className={classes.box} style={{ backgroundColor: "" }}>
          Box 2
        </div>
      </Grid>

      <div className="footer" 
      style=
      {{marginTop:'172px',height:"297px",width:'100%',backgroundColor:"#006699",display:"flex",
      flexDirection:'row'}} >
         <div className="footone"
          style={{width:"50%"}} >
          <h1 style={
            {
                padding:0,
                marginLeft:'82px',
                marginTop:"80px",
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
                      style={{
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
           
           <div style={{
                 width:"464px",
                 height:"46px",
              
                 borderRadius: "10px",
                 marginLeft:"81px",   
                 backgroundColor:'white',
           }} >
            <input type="text"
             style={{
                fontSize:'20px',
                fontFamily:'MuseoModerno',
                height:"36px",
                width:"300px",
                background: "#FFFFFF",
                color:'black',
                opacity: 0.8,
                borderRadius: "10px",
                border: '0px solid',
                outline:'none'

            }}
             />
            <button style={
                {
                    verticalAlign:'center',
                    float:'right',

                   height:"48px",
                   width:'156px',
                  fontFamily: 'MuseoModerno',
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "22px",
                  
                  textTransform: "capitalize",
                  
           
                  color: "#FFFFFF",
                  background: "linear-gradient(68.58deg, #883BDE 9%, #88D5DE 97.66%)",
borderRadius: "10px",
        }} >Subscribe</button>
           </div>


         </div>
         <div className="foottwo"
         style={{backgroundColor:'yellow',width:"50%",}}
         >
          <p>Don't hesitate to subscribe to latest news about optimos </p>


         </div>

      </div>

      <div className="last" style={{
backgroundColor:"#006699",
height:'46px',
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'

      }}>
    <div style={{
      fontFamily: 'MuseoModerno',
fontStyle: "normal",
fontWeight: "400",
fontSize: "14px",
lineHeight: "22px",

textAAlign: "center",

color: "#FFFFFF"}} >2022 : All Right Reserved by optimos</div>

      </div>
    </Grid>
  );
}

export default Joinus;
