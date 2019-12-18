import React, { Component } from 'react';
import { Grid, TextField, Button, Typography } from '@material-ui/core';

class CalcCubeCard extends Component {
  state = {
    level: 0 as number,
    cubeCount: 0 as number,
    meso: 0 as number,
  };

  handleChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  setCubeCost = (level: number): number => {
    let cubeCost;

    if (level < 30) {
      cubeCost = 0;
    } else if (level < 71) {
      cubeCost = level * level * 0.5;
    } else if (level < 121) {
      cubeCost = level * level * 2.5;
    } else {
      cubeCost = level * level * 20;
    }

    return cubeCost;
  }

  calcResult = () => {
    this.setState({
      meso: Math.floor(this.setCubeCost(this.state.level)) * this.state.cubeCount,
    });
  }

  comma = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  render() {
    const { level, cubeCount, meso } = this.state;

    return (
      <div>
        <Grid container spacing={2} className="col-2-height">
          <Grid item xs={12}> 큐브비용 계산기 </Grid>
          <Grid item xs={6} className="flex-vertical">
            <TextField
              label="해당 장비 렙제"
              value={level}
              name="level"
              onChange={this.handleChange}
              type="number"
              margin="normal"
              className="input-form"
            />
            <TextField
              label="돌릴 횟수"
              value={cubeCount}
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
              onClick={this.calcResult}
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
              {this.comma(meso)} 메소
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CalcCubeCard;
