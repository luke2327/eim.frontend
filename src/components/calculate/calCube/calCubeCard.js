import React, { Component } from 'react';
import { Grid, TextField, Button, Typography } from '@material-ui/core';

class CalCubeCard extends Component {
  state = {
    level: 0,
    cubeCount: 0,
    meso: 0,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}> 큐브비용 계산기 </Grid>
          <Grid item xs={6} className="flex-vertical">
            <TextField
              label="해당 장비 렙제"
              value={this.state.level}
              name="level"
              onChange={this.handleChange}
              type="number"
              margin="normal"
              className="input-form"
            />
            <TextField
              label="돌릴 횟수"
              value={this.state.cubeCount}
              name="cubeCount"
              onChange={this.handleChange}
              type="number"
              margin="normal"
              className="input-form"
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              className="cube-result-button"
              color="primary"
              variant="outlined"
              fullWidth
            >
              계산하기
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className="black-font"
              variant="h5"
            >
              120,000 메소
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CalCubeCard;
