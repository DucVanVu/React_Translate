import Button from '@material-ui/core/Button';
import { makeStyles, styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import React, { useState } from 'react';

// import Language from './Language';

const Button1 = styled(Button)({
  padding: "6px 12px",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "25px",
  textTransform: "uppercase",
  margin: "5px 0px",
  float: "left",
  paddingLeft: "20px",
  paddingRight: "22px",
  color: "#5f6368",
})

const useStyles = makeStyles({
  container: {
    width: "95%",
    height: "218px",
    border: "1px solid #ddd",
    backgroundColor: "white",
    position: "absolute",
    marginLeft: "2.2%",
    borderRadius: "8px",
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.37)",
    marginTop: "68px",
    float: "left",
  },
  selectLanguage: {
    borderBottom: "1px solid #ddd",
    width: "100%",
    height: "21%",
    marginLeft: "10px",    
  },
  translate1: {
    width: "50%",
    height: "79%",
    float: "left",
    color: "black",
    position: "absolute",
    textTransform: "capitalize",
  },

  translate2: {
    width: "50%",
    height: "79%",
    color: "black",
    textTransform: "capitalize",
    backgroundColor: "#F5F5F5",
    float: "right",
  },
  text1: {
    padding: "20px 25px",
    fontSize: "20px",
    float: "left",
  },
  text2: {
    padding: "20px 30px",
    fontSize: "20px",
  },
  close: {
    color: "#737373",
    float: "right",
    marginRight: "20px",
    marginTop: "20px",
    display: "relative",
  },
  keyboard: {
    color: "#737373",
    float: "right",
    marginTop: "130px",
  },
  arrow: {
    color: "#737373",
    float: "right",
    marginTop: "130px",
    marginRight: "-22px",
  },
  voice: {
    marginTop: "130px",
    color: "#737373",
    marginLeft: "-90px",
  }
})

export default function Demo() {
  const [language1, setlanguage1] = useState("Englist");
  const [language2, setlanguage2] = useState("Englist");
  const classes = useStyles();
  return(
    <div className={classes.container}>
      <div className={classes.selectLanguage}>
        <Button1 onClick={() => setlanguage1("detect language")}>detect language</Button1>
        <Button1 onClick={() => setlanguage1("englist")}>englist</Button1>
        <Button1 onClick={() => setlanguage1("vietnamese")}>vietnamese</Button1>
        <Button1 onClick={() => setlanguage1("spainish")}>spainish</Button1>
        <Button1><ExpandMoreIcon /></Button1>
        <Button1><SwapHorizIcon /></Button1>
        <Button1 onClick={() => setlanguage2("englist")}>englist</Button1>
        <Button1 onClick={() => setlanguage2("vietnamese")}>vietnamese</Button1>
        <Button1 onClick={() => setlanguage2("spainish")}>spainish</Button1>
        <Button1><ExpandMoreIcon /></Button1>
        
      </div>
      <div className={classes.translate1}>
        <Typography className={classes.text1}>{language1}</Typography>
        <CloseIcon className={classes.close}/>
        <ArrowDropDownIcon className={classes.arrow} />
        <KeyboardIcon className={classes.keyboard} />
        <SettingsVoiceIcon className={classes.voice} />
      </div>
      <div className={classes.translate2}>
        <Typography className={classes.text2}>{language2}</Typography>
      </div>
    </div>
  )
}
