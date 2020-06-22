import Button from '@material-ui/core/Button';
import { makeStyles, styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Apps, Menu } from '@material-ui/icons';
import React from 'react';

const Button1 = styled(Button)({
  backgroundColor: "blue",
  borderColor: "transparent",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "22px",
  textTransform: "capitalize",
  margin: "0px",
  top: "-5px",
  float: "right",
  paddingLeft: "25px",
  paddingRight: "25px",
  fontSize: "13px",
})

const useStyles = makeStyles({
  frames: {
    height: "65px",
  },
  titleCommon: {
    padding: "20px 24px",
  },
  icon1: {
    color: "#5f6368",
    float: "left",
  },
  title1: {
    float: "left",
    paddingLeft: "15px",
    paddingTop: "2px",
    content: "url(https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg)",
  },
  title2: {
    float: "left",
    paddingLeft: "4px",
    lineHeight: "24px",
    fontSize: "20px",
    fontFamily: "'Product Sans',Arial,sans-serif",
    color: "#5f6368",
    opacity: "1",
  },
  title3: {
    display: "block",
    float: "right",
    marginRight: "20px",
  },
  vim: {
    height: "162px",
    width: "100%",
    borderTop: "1px solid #ddd",
    borderBottom: "1px solid #ddd",
    display: "block",
    float: "left",
    marginTop: "10px",
    backgroundColor: "#FAFAFA",
  },
})

export default function Demo() {
  const classes = useStyles();
  return(
    <div className={classes.frames}>
      <div className={classes.titleCommon}>
        <Menu className={classes.icon1} />
        <Typography className={classes.title1}></Typography>
        <Typography className={classes.title2}>Translate</Typography>
        <Button1 type="button" variant="contained" color="primary">Sign in</Button1>
        <Apps className={classes.title3} />
      </div>
      
    </div>
  )
}
