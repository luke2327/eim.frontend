import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import EnhanceLuckCard from './enhanceCard/enhanceLuckCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100vh',
    backgroundColor: '#EAEAEA',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

class EnhanceEquipCpt extends Component {

  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <EnhanceLuckCard title="스타포스" content="맑습니다"/>
          </Grid>
          <Grid item xs={4}>
            <EnhanceLuckCard title="큐브" content="흐림니다"/>
          </Grid>
          <Grid item xs={4}>
            <EnhanceLuckCard title="젬스톤" content="비가오네요"/>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>
              스탯입력Form
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <Paper className={classes.paper}>
              스탯평가Form
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              해당 장비 관련 각종 컨텐츠
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(EnhanceEquipCpt)