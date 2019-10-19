import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Box, Theme, createStyles } from '@material-ui/core';
import EnhanceLuckCard from './enhanceCard/enhanceLuckCard';
import EnhanceInputCard from './enhanceCard/enhanceInputCard';
import EnhanceEvaluateForm from './enhanceCard/enhanceEvaluate/enhanceEvaluateForm';
import LeftSideCpt from '../layout/leftSide';
import { FormattedHTMLMessage } from 'react-intl';
import EnhanceSfCostCard from './enhanceCard/enhanceSfCost/enhanceSfCostCard';
import EnhanceStore from '../../stores/enhanceStore';
import itemApi from '../../libs/api/item';
import { WithStyles } from '@material-ui/styles';
import { inject, observer } from 'mobx-react';

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
  middlePaper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 850,
    verticalAlign: 'middle',
    backgroundColor: '#FFFFFF',
  },
}));

interface Props {
  classes: {
    root: string,
    paper: string,
    middlePaper: string,
  },
  enhance: EnhanceStore,
}

@inject('enhanceStore')
@observer
class EnhanceEquipCpt extends Component<Props>{
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
    const { classes, enhance } = this.props;
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
                  <EnhanceEvaluateForm enhance={enhance} />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <EnhanceSfCostCard enhance={enhance} />
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
