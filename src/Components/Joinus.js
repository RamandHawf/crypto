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
/* identical to box height, or 117% */

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
/* identical to box height, or 117% */

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
    </Grid>
  );
}

export default Joinus;
