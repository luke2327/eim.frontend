import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Box } from '@material-ui/core';
import LeftSideCpt from 'components/layout/leftSide';
import CalMesoCard from './calMeso/calMesoCard';
import CalCubeCard from './calCube/calCubeCard';
import CalMileageCard from './calMileage/calMileageCard';
import CalBossMesoCard from './calBossMeso/calBossMesoCard';
import CalSimbolCard from './calSimbol/calSimbolCard';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#FFFFFF',
  },
  bossMesoPaper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#FFFFFF',
  },
});

class Calculate extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.root}>
        <div id="enhance" className="flexible container-default default margin-center-hori">
          <LeftSideCpt />
          <div className={[classes.root, 'fade-in'].join(' ')}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper className={classes.bossMesoPaper}>
                  <CalBossMesoCard />
                </Paper>
              </Grid>
              <Grid item xs={7}>
                <Paper className={classes.paper}>
                  <CalMesoCard />
                </Paper>
              </Grid>
              <Grid item xs={5}>
                <Paper className={classes.paper}>
                  <CalCubeCard />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <CalSimbolCard />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
    );
  }
}

export default withStyles(styles)(Calculate);
