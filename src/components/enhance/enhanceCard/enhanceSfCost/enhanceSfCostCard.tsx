import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, FormControl, NativeSelect, Typography, Theme, createStyles } from '@material-ui/core';
import EnhanceStore from '../../../../stores/enhanceStore';
import { CASH_GRADE } from '../../../../models/cashGrade.type';


const styles = (theme: Theme) => (
  createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: 30,
  },
}));

interface Props {
  classes: {
    formControl: string,
  },
  enhance: EnhanceStore,
}

const CustomTooltip = (props: { active?: any; payload?: any; label?: any; }) => {
  const comma = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const { active } = props;

  if (active) {
    const { payload, label } = props;
    return (
      <div className="eh-tooltip" align="center">
        <p className="label">스타포스</p>
        <p className="label">{label}</p>
        <p className="intro">{`${comma(payload[0].value)}메소`}</p>
      </div>
    );
  }

  return null;
};


class EnhanceSfCostCard extends Component<Props> {
  state = {
    grade: 'bronze' as CASH_GRADE,
  }

  handleGradeChange = async (e) => {
    await this.setState({
      grade: e.target.value,
    });
    this.props.enhance.cashGrade = this.state.grade;
    this.props.enhance.setSfCostInfo();
  }

  render() {
    const { classes, enhance } = this.props;
    return (
      <div>
        <Grid>
          <Grid item xs={12}>
            <Typography variant="h5">스타포스 비용 분석</Typography>
            <div align="left">
              <FormControl className={classes.formControl}>
                <NativeSelect
                  value={this.state.grade}
                  onChange={this.handleGradeChange}
                >
                  <option value="bronze">브론즈</option>
                  <option value="silver">실버</option>
                  <option value="gold">골드</option>
                  <option value="diamond">다이아</option>
                </NativeSelect>
              </FormControl>
            </div>
            <div align="right">
              단일비용
              <AreaChart
                width={1500}
                height={400}
                data={enhance.sfCostInfo}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="cost" stackId="1" stroke="#8884d8" fill="#8884d8" />
                {/* <Area type="monotone" dataKey="expectCost" stackId="1" stroke="#82ca9d" fill="#82ca9d" /> */}
              </AreaChart>
              평균기대비용
              <AreaChart
                width={1500}
                height={400}
                data={enhance.sfCostInfo}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                {/* <Area type="monotone" dataKey="cost" stackId="1" stroke="#8884d8" fill="#8884d8" /> */}
                <Area type="monotone" dataKey="expectCost" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(EnhanceSfCostCard);
