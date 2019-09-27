import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Grid } from '@material-ui/core';

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: '#000000',
    height: 650,
    backgroundColor: '#FAF4C0',
  },
});

@inject('enhance')
@observer
class EnhanceEvaluateForm extends Component {
  render() {
    const { enhance } = this.props;
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <RadarChart cx={270} cy={250} outerRadius={150} width={560} height={500} data={enhance.evaluateData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
          </Grid>
          <Grid item xs={12}>
            <BarChart
              width={500}
              height={300}
              data={enhance.evaluateData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              {/* <Tooltip content={<CustomTooltip/>} /> */}
              <Legend />
              <Bar dataKey="A" barSize={20} fill="#8884d8" />
            </BarChart>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(EnhanceEvaluateForm);
