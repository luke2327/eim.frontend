import React, { Component } from 'react';
import { Grid, TextField, Button, Typography, Divider } from '@material-ui/core';

class CalcMesoCard extends Component {
  state = {
    monsterExp: 0,
    monsterMeso: 0,
    goalExp: 0,
    result: {
      mob10Million: 0,
      mesoExp100Million: 0,
      mesoGoalExp: 0,
    },
  };

  handleChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  comma = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  calcResult = () => {
    this.setState({
      result: {
        mob10Million: Math.floor((10000000 / this.state.monsterMeso)),
        mesoExp100Million: Math.floor((100000000 / this.state.monsterExp) * this.state.monsterMeso),
        mesoGoalExp: Math.floor((this.state.goalExp / this.state.monsterExp) * this.state.monsterMeso),
      },
    });
  }

  render() {
    const { monsterExp, monsterMeso, goalExp, result} = this.state;

    return (
      <div>
        <Grid container spacing={2} className="col-2-height">
          <Grid item xs={12}> 메소 계산기 </Grid>
          <Grid item xs={6} className="flex-vertical">
            <TextField
              label="몹 한마리당 얻는 경험치"
              value={monsterExp}
              name="monsterExp"
              onChange={this.handleChange}
              type="number"
              margin="normal"
              className="input-form"
            />
            <TextField
              label="몹 한마리당 얻는 메소"
              value={monsterMeso}
              name="monsterMeso"
              onChange={this.handleChange}
              type="number"
              margin="normal"
              className="input-form"
            />
            <TextField
              label="목표 경험치량"
              value={goalExp}
              name="goalExp"
              onChange={this.handleChange}
              type="number"
              margin="normal"
              className="input-form"
            />
            <Button
              className="result-button"
              color="primary"
              variant="outlined"
              onClick={this.calcResult}
            >
              계산하기
            </Button>
          </Grid>
          <Grid item xs={6} className="meso-result-form">
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              className="black-font"
            >
              천만메소당 잡아야 하는 몹 수
            </Typography>
            <div className="meso-result">
              {this.comma(result.mob10Million)} 마리
            </div>
            <div className="divider-margin" />
            <Divider />
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              className="black-font"
            >
              경험치 1억당 얻는 메소
            </Typography>
            <div className="meso-result">
              {this.comma(result.mesoExp100Million)} 메소
            </div>
            <Typography
              variant="overline"
              display="block"
              gutterBottom
              className="black-font"
            >
              목표 경험치 도달시 얻는 메소
            </Typography>
            <div className="meso-result">
              {this.comma(result.mesoGoalExp)} 메소
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CalcMesoCard;
