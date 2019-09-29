import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Box } from '@material-ui/core';
import EnhanceLuckCard from './enhanceCard/enhanceLuckCard';
import EnhanceInputCard from './enhanceCard/enhanceInputCard';
import EnhanceEvaluateForm from './enhanceCard/enhanceEvaluate/enhanceEvaluateForm';
import LeftSideCpt from 'components/layout/leftSide';
import { FormattedHTMLMessage } from 'react-intl';
import EnhanceSfCostCard from './enhanceCard/enhanceSfCost/enhanceSfCostCard';
import itemApi from 'libs/api/item';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#94B0C2',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#FFFFFF',
  },
  middlePaper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 850,
    verticalAlign: 'middle',
    backgroundColor: '#FFFFFF',
  },
});

class EnhanceEquipCpt extends Component {
  state = {
    ch: {
      starforce: 0,
      cube: 0,
      gemstone: 0,
    },
  }

  componentDidMount() {
    this.PostLuckyData('SEND!!');
  }

  PostLuckyData = async (msg) => {
    const data = {
      msg: msg,
    };
    return itemApi.getLuckyChannel(data).then((res) => {
      this.setState({
        ch: res.data,
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.root}>
        <div id="enhance" className="flexible container-default default margin-center-hori">
          <LeftSideCpt />
          <div className={[classes.root, 'fade-in'].join(' ')}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <FormattedHTMLMessage
                  id="enhance.object.starforce"
                >
                  {(object) => <EnhanceLuckCard title={object} content={this.state.ch.starforce} />}
                </FormattedHTMLMessage>
              </Grid>
              <Grid item xs={4}>
                <FormattedHTMLMessage
                  id="enhance.object.cube"
                >
                  {(object) => <EnhanceLuckCard title={object} content={this.state.ch.cube} />}
                </FormattedHTMLMessage>
              </Grid>
              <Grid item xs={4}>
                <FormattedHTMLMessage
                  id="enhance.object.gemstone"
                >
                  {(object) => <EnhanceLuckCard title={object} content={this.state.ch.gemstone} />}
                </FormattedHTMLMessage>
              </Grid>
              <Grid item xs={7}>
                <Paper className={classes.middlePaper}>
                  <EnhanceInputCard />
                </Paper>
              </Grid>
              <Grid item xs={5}>
                <Paper className={classes.middlePaper}>
                  <EnhanceEvaluateForm />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <EnhanceSfCostCard />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
    );
  }
}

export default withStyles(styles)(EnhanceEquipCpt);
