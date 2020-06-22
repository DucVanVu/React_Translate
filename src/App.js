import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import Bottom from './components/Bottom';
import Hidden from './components/Hidden';
import Title from './components/Title';
import Translate from './components/Translate';

const useStyles = makeStyles({
  container: {
    fontFamily: "'Roboto',arial,sans-serif",
    color: "#777",
    fontSize: "30px",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Title />
      <Hidden />
      <Translate />
      <Bottom />
    </div>
  );
}
