import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import { Box, Grid, FormControl, NativeSelect, Input } from '@material-ui/core';

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

@inject('enhance')
@observer
class EnhanceStatCard extends Component {
  handleInputChange = (e) => {
    this.props.enhance.handleChangeEnhanceStat(e.target.name, Number(e.target.value));
  }

  render() {
    const { statName, opt, name, enhance } = this.props;
    return (
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={2}> { statName } </Grid>
          <Grid item xs={2}> { opt } </Grid>
          <Grid item xs={2}> { enhance.sfStat[name] } </Grid>
          <Grid item xs={2}>
            <FormControl>
              <NativeSelect>
                <option value="">32</option>
                <option value="">43</option>
                <option value="">62</option>
                <option value="">48</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            { name === 'none' ?
              ''
              :
              <Input
                type="Number"
                placeholder="먼저입력하세요"
                onChange={this.handleInputChange}
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
