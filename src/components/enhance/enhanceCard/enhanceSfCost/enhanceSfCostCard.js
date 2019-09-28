import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { withStyles } from '@material-ui/core/styles';
import { Grid, FormControl, InputLabel, NativeSelect, Typography } from '@material-ui/core';


const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: 30,
  },
});

class EnhanceSfCostCard extends Component {
  data = [
    {
      name: '0성', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: '1성', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: '2성', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: '3성', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: '4성', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: '5성', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: '6성', uv: 3490, pv: 4300, amt: 2100,
    },
    {
      name: '7성', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: '8성', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: '9성', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: '10성', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: '11성', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: '12성', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: '13성', uv: 3490, pv: 4300, amt: 2100,
    },
    {
      name: '14성', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: '15성', uv: 3490, pv: 4300, amt: 2100,
    },
    {
      name: '16성', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: '17성', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: '18성', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: '19성', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: '20성', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: '21성', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: '22성', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid>
          <Grid item xs={12}>
            <Typography variant="h5">스타포스 비용 분석</Typography>
            <div align="left">
              <FormControl className={classes.formControl}>
                <NativeSelect>
                  <option value="bronze">브론즈</option>
                  <option value="silver">실버</option>
                  <option value="gold">골드</option>
                  <option value="diamond">다이아</option>
                </NativeSelect>
              </FormControl>
            </div>
            <AreaChart
              width={1500}
              height={400}
              data={this.data}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(EnhanceSfCostCard);
