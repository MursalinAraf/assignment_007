import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './Styles'


export default function Footer() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Developed By Mursalin
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
}
