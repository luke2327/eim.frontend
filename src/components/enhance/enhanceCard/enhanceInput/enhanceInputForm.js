import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, FormControl, InputLabel, Select, MenuItem, Grid, Button } from '@material-ui/core';
import EnhanceStatCard from './enhanceStatCard';


const styles = theme => ({
  nameText: {
    color: "#333333"
  },
  sfControl: {
    minWidth: 120,
    marginBottom: 40,
    marginRight: 40
  },
  addButton:{
    marginTop: 20,
    width: '100%'
  }
});


class EnhanceInputForm extends Component {

  state={
    level: 150,
    getSf: {
      value: 0,
      name: '',
    }
  }

  handleSfChange = (e) => {
    this.setState({
      getSf:{
        value: e.target.value,
        name: e.target.name
      }
    })
    console.log(this.state.getSf)
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography 
          variant="h5"
          className={classes.nameText}
        >
          하이네스 원더러햇
        </Typography>
        <div align="left">
          <div align="right">
              LV{this.state.level}
          </div>
          <FormControl className={classes.sfControl}>
            <InputLabel>스타포스</InputLabel>
            <Select 
              name={this.state.getSf.name}
              value={this.state.getSf.value}
              onChange={this.handleSfChange}
            >
              <MenuItem name={"1성"} value={1}>1성</MenuItem>
              <MenuItem name={"2성"} value={2}>2성</MenuItem>
              <MenuItem name={"3성"} value={3}>3성</MenuItem>
              <MenuItem name={"4성"} value={4}>4성</MenuItem>
              <MenuItem name={"5성"} value={5}>5성</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.sfControl}>
            <InputLabel>직업</InputLabel>
            <Select 
              name={this.state.getSf.name}
              value={this.state.getSf.value}
              onChange={this.handleSfChange}
            >
              <MenuItem name={"1성"} value={1}>해적</MenuItem>
              <MenuItem name={"2성"} value={2}>전사</MenuItem>
              <MenuItem name={"3성"} value={3}>도적</MenuItem>
              <MenuItem name={"4성"} value={4}>마법사</MenuItem>
              <MenuItem name={"5성"} value={5}>궁수</MenuItem>
              <MenuItem name={"5성"} value={5}>데몬어벤져</MenuItem>
              <MenuItem name={"5성"} value={5}>제논</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={2} className={classes.nameText}>스탯</Grid>
          <Grid item xs={2} className={classes.nameText}>기본옵션</Grid>
          <Grid item xs={2} className={classes.nameText}>스타포스</Grid>
          <Grid item xs={2} className={classes.nameText}>추가옵션</Grid>
          <Grid item xs={2} className={classes.nameText}>강화수치</Grid>
          <Grid item xs={2} className={classes.nameText}>확인</Grid>
        </Grid>
        <EnhanceStatCard statName="마력" opt={0}/>
        <EnhanceStatCard statName="공격력" opt={2}/>
        <EnhanceStatCard statName="str" opt={40}/>
        <EnhanceStatCard statName="dex" opt={40}/>
        <EnhanceStatCard statName="luk" opt={0}/>
        <EnhanceStatCard statName="int" opt={0}/>
        <EnhanceStatCard statName="HP" opt={360}/>
        <EnhanceStatCard statName="MP" opt={360}/>
        <EnhanceStatCard statName="올스탯" opt={0}/>
        <EnhanceStatCard statName="착감" opt={0}/>
        <Button 
          className={classes.addButton}
          variant="outlined"
        >
          분석하기
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(EnhanceInputForm);