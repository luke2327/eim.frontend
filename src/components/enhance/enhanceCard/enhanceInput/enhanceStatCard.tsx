import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import { Box, Grid, Input, Theme, createStyles } from '@material-ui/core';
import EnhanceStore from '../../../../stores/enhanceStore';
import { STAT_NAME_BASIC, ALL_STAT_NAME, STAT_NAME_ADDITIONAL } from '../../../../models/statName.type';

const styles = (theme: Theme) => (
  createStyles({
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    mainStatFont: {
      color: '#8324FF',
    },
    blackFont: {
      color: '#000000',
    },
  })
);

interface Props {
  classes: {
    paper: string,
    mainStatFont: string,
    blackFont: string,
  };
  enhance: EnhanceStore;
  statName: string;
  name: ALL_STAT_NAME;
  titleColor: string;
  opt: number | string;
  starforce: number;
}

@inject('enhance')
@observer
class EnhanceStatCard extends Component<Props> {
  handleEnhanceStatChange = (e: any) => {
    e.target.value =
      (e.target.value >= this.props.enhance.setInputMaxEnhanceStat(this.props.name as STAT_NAME_BASIC))
        ? this.props.enhance.setInputMaxEnhanceStat(this.props.name as STAT_NAME_BASIC)
        : e.target.value;
    e.target.value = (e.target.value < 0) ? 0 : e.target.value;

    this.props.enhance.handleChangeEnhanceStat(e.target.name, Number(e.target.value));
  }
  handleAddOptStatChange = (e: any) => {
    e.target.value =
      parseInt((e.target.value >= this.props.enhance.setInputMaxAddOptStat(this.props.name))
        ? this.props.enhance.setInputMaxAddOptStat(this.props.name)
        : e.target.value, 10);
    e.target.value = (e.target.value < 0) ? 0 : e.target.value;

    this.props.enhance.handleChangeAddOptStat(e.target.name, Number(e.target.value));
  }

  render() {
    const { classes, statName, opt, name, enhance, titleColor } = this.props;
    return (
      <Box>
        <Grid container spacing={3}>
          <Grid
            item
            xs={2}
            className={titleColor === 'red' ? classes.mainStatFont : classes.blackFont}> { statName } </Grid>
          <Grid item xs={2}> { opt } </Grid>
          <Grid item xs={2}> { enhance.sfStat[name as STAT_NAME_BASIC] } </Grid>
          <Grid item xs={2}>

            { name === 'monster_def'
              ? ''
              :
              <Input
                type="Number"
                placeholder=""
                onChange={this.handleAddOptStatChange}
                defaultValue={0}
                name={name}
              />}
          </Grid>
          <Grid item xs={2}>
            { (name === 'chackgam'
              || name === 'allstat'
              || name === 'boss_atk'
              || name === 'damage'
              || name === 'monster_def')
              ? ''
              :
              <Input
                type="Number"
                placeholder="먼저입력하세요"
                rowsMax={99}
                onChange={this.handleEnhanceStatChange}
                name={name}
              />}
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(EnhanceStatCard);
