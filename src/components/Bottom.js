import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PeopleIcon from '@material-ui/icons/People';
import RestoreIcon from '@material-ui/icons/Restore';
import StarIcon from '@material-ui/icons/Star';
import React from 'react';

const useStyles = makeStyles({
  container: {
    marginTop: "390px",
    marginLeft: "37%",
    
  },
  circle: {
    height: "70px",
    width: "70px",
    border: "1px solid #ddd",
    borderRadius: "50%",
    marginRight: "65px",
  },
  common: {
    fontSize: "33px",
    marginLeft: "-12px",
    
  },
});

export default function Bottom() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <div className={classes.circle}>
        <BottomNavigationAction icon={<RestoreIcon className={classes.common}/>} />
      </div>
      <div className={classes.circle}>
        <BottomNavigationAction icon={<StarIcon className={classes.common}/>} />
      </div>
      <div className={classes.circle}>
        <BottomNavigationAction icon={<PeopleIcon className={classes.common}/>} />
      </div>

      {/* <BottomNavigationAction label="DaLuu" icon={<StarIcon />} />
      <BottomNavigationAction label="CongDong" icon={<PeopleIcon />} /> */}
    </Grid>
  );
}
