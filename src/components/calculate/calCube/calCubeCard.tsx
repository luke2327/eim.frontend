import React, { Component } from 'react';
import { Grid, TextField, Button, Typography } from '@material-ui/core';

class CalCubeCard extends Component {
  state = {
    level: 0,
    cubeCount: 0,
    meso: 0,
  }

  handleChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  setCubeCost = (level: number) => {
    if (level < 30) {
      return 0;
    } if (level < 71) {
      return level * level * 0.5;
    } if (level < 121) {
      return level * level * 2.5;
    }
    return level * level * 20;
  }

  calResult = () => {
    this.setState({
      meso: Math.floor(this.setCubeCost(this.state.level)) * this.state.cubeCount,
    });
  }

  comma = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  render() {
    return (
      <div>
        <Grid container spacing={2} className="col-2-height">
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
              onClick={this.calResult}
              color="primary"
              variant="outlined"
              fullWidth
            >
              계산하기
            </Button>
          </Grid>
          <Grid item xs={12}>
            <div
              className="meso-result"
            >
              {this.comma(this.state.meso)} 메소
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CalCubeCard;
