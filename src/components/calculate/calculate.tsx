import React, { Component } from 'react';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper, Box } from '@material-ui/core';
import LeftSideCpt from '../layout/leftSide';
import CalcMesoCard from './calcMeso/calcMesoCard';
import CalcCubeCard from './calcCube/calcCubeCard';
import CalcMileageCard from './calcMileage/calcMileageCard';
import CalcBossMesoCard from './calcBossMeso/calcBossMesoCard';
import CalcSymbolCard from './calcSymbol/calcSymbolCard';

const styles = (theme: Theme) => (
  createStyles({
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
  })
);

interface Props {
  classes: {
    root: string,
    paper: string,
    bossMesoPaper: string,
  }
}

class Calculate extends Component<Props> {
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
                  <CalcBossMesoCard />
                </Paper>
              </Grid>
              <Grid item xs={7}>
                <Paper className={classes.paper}>
                  <CalcMesoCard />
                </Paper>
              </Grid>
              <Grid item xs={5}>
                <Paper className={classes.paper}>
                  <CalcCubeCard />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <CalcSymbolCard />
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
