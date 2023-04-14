import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
// import DiscordIcon from "@material-ui/icons/Discord";
import ArrowIcon from "@material-ui/icons/ArrowForwardIos";
import MIcon from "@material-ui/icons/Mail";
// import MessengerIcon from "@material-ui/icons/FacebookMessenger";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    height: 120,
    backgroundColor: "#181818",
  },
  navContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 36,
    marginTop: 48,
    height: 48,
    width: "100%",
    backgroundColor: "none",
  },
  logo: {
    marginRight: theme.spacing(2),
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
  docs: {
    // fontFamily: 'MuseoModerno',

    marginLeft: 32,
    fontFamily: "MuseoModerno",
    color: "white",
    marginTop: 13.5,
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
  aboutUs: {
    marginLeft: 141.93,
    fontFamily: "MuseoModerno",
    color: "white",
    marginTop: 13.5,
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
  features: {
    marginLeft: 32,
    fontFamily: "MuseoModerno",
    color: "white",
    marginTop: 13.5,
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
  team: {
    marginLeft: 32,
    fontFamily: "MuseoModerno",
    color: "white",
    marginTop: 13.5,
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
  faq: {
    marginLeft: 32,
    fontFamily: "MuseoModerno",
    color: "white",
    marginTop: 13.5,
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
  iconButton: {
    marginTop: 13.5,
  },
  
  icon1: {
    marginLeft: 142,
    color: 'white',
    height: 18,
    width: 18,
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
  icon2: {
    marginLeft:16,
    color:'white',
    height: 18,
    width: 18,
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
  icon3: {
    marginLeft:16,
    color:'white',
    height: 18,
    width: 18,
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
  icon4: {
    marginLeft:16,
    color:'white',
    height: 18,
    width: 18,
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.navContainer}>
          <div className={classes.logo}>
            <img src="BLK.png" alt="logo" style={{ height: "48px" }} />
          </div>
          <Typography className={classes.aboutUs}>About Us</Typography>
          <Typography className={classes.features}>Features</Typography>
          <Typography className={classes.docs}>Optimos Docs</Typography>
          <Typography className={classes.team}>Team</Typography>
          <Typography className={classes.faq}>FAQ</Typography>

          <IconButton className={classes.iconButton}>
            <TwitterIcon className={classes.icon1} />
          </IconButton>
          {/* <IconButton className={classes.iconButton}>
            <DiscordIcon className={classes.icon} />
          </IconButton> */}
          <IconButton className={classes.iconButton}>
            <LinkedInIcon className={classes.icon2} />
          </IconButton>
          <IconButton className={classes.iconButton}>
            <ArrowIcon className={classes.icon3} />
          </IconButton>
          <IconButton className={classes.iconButton}>
            <MIcon className={classes.icon4} />
          </IconButton>
          {/* <IconButton className={classes.iconButton}>
            <MessengerIcon className={classes.icon} />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
