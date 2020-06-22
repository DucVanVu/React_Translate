import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles, styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
  vim: {
    height: "162px",
    width: "100%",
    borderTop: "1px solid #ddd",
    borderBottom: "1px solid #ddd",
    float: "left",
    margin: "0px",
    backgroundColor: "#FAFAFA",
    position: "absolute",
  },
  text: {
    textAlign: "center",
    height: "34px",
    width: "85px",
    backgroundColor: "#E6E7F9",
    border: "1px solid #ddd",
    borderRadius: "4px",
    margin: "15px 5px",
    color: "#1A73E7",
    float: "left",
    cursor: "pointer",
  },
  a: {
    content: "url('https://ssl.gstatic.com/translate/ic_translate_googblue600_20dp.svg')",
    paddingTop: "7px",
    paddingLeft: "11px",
    float: "left",
  },
  text1: {
    margin: "0px",
    paddingRight: "5px",
    paddingTop: "6px",
    fontSize: "15px",
    fontFamily: "'Google Sans',sans-serif",
    fontWeight: "bold",
  },
  document: {
    textAlign: "center",
    height: "34px",
    width: "138px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    margin: "15px 4px",
    color: "#1a73e8",
    float: "left",
    marginLeft: "0px",
    fontWeight: "lighter",
    cursor: "pointer",
  },
  b: {
    content: "url('https://ssl.gstatic.com/translate/ic_insert_drive_file_googblue600_20dp.svg')",
    paddingTop: "7px",
    paddingLeft: "11px",
    float: "left",
  },
  document1: {
    margin: "0px",
    paddingRight: "5px",
    paddingTop: "6px",
    fontSize: "15px",
    fontFamily: "'Google Sans',sans-serif",
    fontWeight: "bold",
  },
})

export default function Demo() {
  const classes = useStyles();
  return(
    <Container className={classes.vim} maxWidth="xl">
      <div className={classes.text}>
        <Typography className={classes.a}></Typography>
        <Typography className={classes.text1}>Text</Typography>
      </div>
      <div className={classes.document}>
        <Typography className={classes.b}></Typography>
        <Typography className={classes.document1}>Documents</Typography>
        
      </div>
    </Container>
  )
}

