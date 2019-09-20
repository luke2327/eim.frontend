import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import EnhanceLuckCard from './enhanceCard/enhanceLuckCard';
import EnhanceInputCard from './enhanceCard/enhanceInputCard';
import EnhanceEvaluateForm from './enhanceCard/enhanceEvaluate/enhanceEvaluateForm';
import {　FormattedMessage, FormattedHTMLMessage } from 'react-intl';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#EAEAEA',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  middlePaper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 700,
    verticalAlign: 'middle'
  }
});

class EnhanceEquipCpt extends Component {

  render () {
    const { classes } = this.props;
    return (
      <div className={[classes.root], 'fade-in'}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormattedHTMLMessage
              id="enhance.object.starforce"
            >
              {(object) => <EnhanceLuckCard title={object} content="17"></EnhanceLuckCard>}
            </FormattedHTMLMessage>
          </Grid>
          <Grid item xs={4}>
            <FormattedHTMLMessage
              id="enhance.object.cube"
            >
              {(object) => <EnhanceLuckCard title={object} content="20"></EnhanceLuckCard>}
            </FormattedHTMLMessage>
          </Grid>
          <Grid item xs={4}>
            <FormattedHTMLMessage
              id="enhance.object.gemstone"
            >
              {(object) => <EnhanceLuckCard title={object} content="17"></EnhanceLuckCard>}
            </FormattedHTMLMessage>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.middlePaper}>
              <EnhanceInputCard/>
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <Paper className={classes.middlePaper}>
              <EnhanceEvaluateForm/>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              해당 장비 관련 각종 컨텐츠
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(EnhanceEquipCpt)