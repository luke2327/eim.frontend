import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import { Box, Grid, Input } from '@material-ui/core';

const styles = (theme) => ({
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
});

@inject('enhance')
@observer
class EnhanceStatCard extends Component {
  handleEnhanceStatChange = (e) => {
    e.target.value = (e.target.value >= this.props.enhance.setInputMaxEnhanceStat(this.props.name)) ? this.props.enhance.setInputMaxEnhanceStat(this.props.name) : e.target.value;
    e.target.value = (e.target.value < 0) ? 0 : e.target.value;
    this.props.enhance.handleChangeEnhanceStat(e.target.name, Number(e.target.value));
  }
  handleAddOptStatChange = (e) => {
    e.target.value = parseInt((e.target.value >= this.props.enhance.setInputMaxAddOptStat(this.props.name)) ? this.props.enhance.setInputMaxAddOptStat(this.props.name) : e.target.value, 10);
    e.target.value = (e.target.value < 0) ? 0 : e.target.value;
    this.props.enhance.handleChangeAddOptStat(e.target.name, Number(e.target.value));
  }

  render() {
    const { classes, statName, opt, name, enhance, titleColor } = this.props;
    return (
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={2} className={titleColor === 'red' ? classes.mainStatFont : classes.blackFont}> { statName } </Grid>
          <Grid item xs={2}> { opt } </Grid>
          <Grid item xs={2}> { enhance.sfStat[name] } </Grid>
          <Grid item xs={2}>

            { name === 'monster_def' ?
              ''
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
            { (name === 'chackgam' || name === 'allstat' || name === 'boss_atk' || name === 'damage' || name === 'monster_def') ?
              ''
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
