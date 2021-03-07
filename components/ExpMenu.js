import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    top: "86px",
    left: "83px",
    width: "56px",
    height: "34px",
    // background: "#FFFFFF 0% 0% no-repeat padding-box",
    opacity: 1,
    color: "#FFFFFF",
    position: 'absolute',
  },
  text: {
    top: "76px",
    left: "177px",
    width: "235px",
    height: "56px",
    
    textAlign: "left",
    font: "normal normal normal 48px/57px Helvetica Neue",
    letterSpacing: "4.8px",
    color: "#FFFFFF",
    opacity: 1,
    display: 'inline-box',
    position: 'absolute',
  }
});

ExpMenu.defaultProps = {
  color: 'white',
};

export default function ExpMenu(props) {
  const { color } = props;
  const classes = useStyles();

  return (
    <>
      <MenuIcon className={classes.icon}/>
      <Typography className={classes.text}>EXP|CON</Typography>
    </>
  );
}
