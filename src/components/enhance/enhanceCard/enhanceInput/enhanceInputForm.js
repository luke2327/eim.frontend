import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
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

@inject('enhance')
@observer
class EnhanceInputForm extends Component {

  state={
    level: 150,
    getSf: {
      value: 0,
      name: '',
    },
    getClass: {
      value: 0,
      name: '',
    }
  }

  handleSfChange = async (e) => {
    await this.setState({
      getSf:{
        value: e.target.value,
        name: e.target.name
      }
    })
    console.log(this.state.getSf)
  }

  handleClassChange = async (e) => {
    await this.setState({
      getClass:{
        value: e.target.value,
        name: e.target.name
      }
    })
    console.log(this.state.getClass)
  }

  render() {
    const { classes, enhance } = this.props;
    return (
      <div>
        <Typography 
          variant="h5"
          className={classes.nameText}
        >
          {enhance.item.name}
        </Typography>
        <div align="left">
          <div align="right">
              LV{enhance.item.level}
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
              <MenuItem name={"6성"} value={6}>6성</MenuItem>
              <MenuItem name={"7성"} value={7}>7성</MenuItem>
              <MenuItem name={"8성"} value={8}>8성</MenuItem>
              <MenuItem name={"9성"} value={9}>9성</MenuItem>
              <MenuItem name={"10성"} value={10}>10성</MenuItem>
              <MenuItem name={"11성"} value={11}>11성</MenuItem>
              <MenuItem name={"12성"} value={12}>12성</MenuItem>
              <MenuItem name={"13성"} value={13}>13성</MenuItem>
              <MenuItem name={"14성"} value={14}>14성</MenuItem>
              <MenuItem name={"15성"} value={15}>15성</MenuItem>
              <MenuItem name={"16성"} value={16}>16성</MenuItem>
              <MenuItem name={"17성"} value={17}>17성</MenuItem>
              <MenuItem name={"18성"} value={18}>18성</MenuItem>
              <MenuItem name={"19성"} value={19}>19성</MenuItem>
              <MenuItem name={"20성"} value={20}>20성</MenuItem>
              <MenuItem name={"21성"} value={21}>21성</MenuItem>
              <MenuItem name={"22성"} value={22}>22성</MenuItem>
              <MenuItem name={"23성"} value={23}>23성</MenuItem>
              <MenuItem name={"24성"} value={24}>24성</MenuItem>
              <MenuItem name={"25성"} value={25}>25성</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.sfControl}>
            <InputLabel>직업</InputLabel>
            <Select 
              name={this.state.getClass.name}
              value={this.state.getClass.value}
              onChange={this.handleClassChange}
            >
              <MenuItem name={"해적"} value={1}>해적</MenuItem>
              <MenuItem name={"전사"} value={2}>전사</MenuItem>
              <MenuItem name={"도적"} value={3}>도적</MenuItem>
              <MenuItem name={"마법사"} value={4}>마법사</MenuItem>
              <MenuItem name={"궁수"} value={5}>궁수</MenuItem>
              <MenuItem name={"데몬어벤져"} value={6}>데몬어벤져</MenuItem>
              <MenuItem name={"제논"} value={7}>제논</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={2} className={classes.nameText}>스탯</Grid>
          <Grid item xs={2} className={classes.nameText}>기본옵션</Grid>
          <Grid item xs={2} className={classes.nameText}>스타포스</Grid>
          <Grid item xs={2} className={classes.nameText}>추가옵션</Grid>
          <Grid item xs={2} className={classes.nameText}>강화스탯</Grid>
          <Grid item xs={2} className={classes.nameText}>확인</Grid>
        </Grid>
        <EnhanceStatCard statName="마력" opt={enhance.item.mg_atk}/>
        <EnhanceStatCard statName="공격력" opt={enhance.item.atk}/>
        <EnhanceStatCard statName="str" opt={enhance.item.str}/>
        <EnhanceStatCard statName="dex" opt={enhance.item.dex}/>
        <EnhanceStatCard statName="luk" opt={enhance.item.luk}/>
        <EnhanceStatCard statName="int" opt={enhance.item.int}/>
        <EnhanceStatCard statName="HP" opt={enhance.item.hp}/>
        <EnhanceStatCard statName="MP" opt={enhance.item.mp}/>
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