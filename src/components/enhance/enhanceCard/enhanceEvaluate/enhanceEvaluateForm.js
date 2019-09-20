import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Grid, Paper } from '@material-ui/core';

const styles = theme => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: "#000000",
    height: 650,
    backgroundColor:"#FAF4C0"
  },
});
class EnhanceEvaluateForm extends Component {

  data = [
    { subject: '추옵단계', A: 120, fullMark: 150 },
    { subject: '주문서강화수치', A: 98, fullMark: 150 },
    { subject: '시장가치', A: 86, fullMark: 150 },
    { subject: '스타포스', A: 99, fullMark: 150 },
    { subject: '추옵정확도', A: 85, fullMark: 150 },
  ]

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={1}>
        <Grid item xs={6} >
          <RadarChart cx={270} cy={350} outerRadius={150} width={560} height={700} data={this.data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            HELLO
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(EnhanceEvaluateForm);