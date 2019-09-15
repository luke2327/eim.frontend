import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper, FormControl, NativeSelect } from '@material-ui/core';

const styles = theme => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

class EnhanceStatCard extends Component {
  render() {
    const { classes, statName, opt } = this.props;
    return (
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={3}> { statName } </Grid>
          <Grid item xs={3}> { opt } </Grid>
          <Grid item xs={3}> hello </Grid>
          <Grid item xs={3}>
            <FormControl>
              <NativeSelect>
                <option value="">32</option>
                <option value="">43</option>
                <option value="">62</option>
                <option value="">48</option>
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(EnhanceStatCard);