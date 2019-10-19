import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, FormControl, InputLabel, Select, MenuItem, Grid, Button } from '@material-ui/core';
import EnhanceStatCard from './enhanceStatCard';
import MessageDialog from '../msg/messageDialog';
import EnhanceStore from '../../../../stores/enhanceStore';

const styles = () => ({
  nameText: {
    color: '#333333',
  },
  sfControl: {
    minWidth: 120,
    marginBottom: 40,
    marginRight: 40,
  },
  buttonClass: {
    marginTop: 20,
    width: '100%',
  },
});

interface Props{
  classes: {
    nameText: string,
    sfControl: string,
    buttonClass: string,
  },
  enhance: EnhanceStore,
  handleStateChange: () => void,
}

class EnhanceInputForm extends Component<Props> {
  state={
    level: 150,
    getSf: {
      value: 0,
      name: '',
    },
    getClass: {
      value: '',
      name: '',
    },
    statName: {
      mg_atk: { id: 'mg_atk', name: '마력' },
      atk: { id: 'atk', name: '공격력' },
      str: { id: 'str', name: 'str' },
      dex: { id: 'dex', name: 'dex' },
      luk: { id: 'luk', name: 'luk' },
      int: { id: 'int', name: 'int' },
      hp: { id: 'hp', name: 'HP' },
      mp: { id: 'mp', name: 'MP' },
      allstat: { id: 'allstat', name: '올스탯(%)' },
      chackgam: { id: 'chackgam', name: '착감' },
    },
    msg: {
      msgStatus: false,
      content: '',
    },
  }

  closeMsgDialog = () => {
    this.setState({
      msg: {
        msgStatus: false,
      },
    });
  }

  handleSfChange = (e) => {
    if (this.props.enhance.checkEnhanceStat()) {
      this.setState({
        getSf: {
          value: e.target.value,
          name: e.target.name,
        },
      });
      this.props.enhance.setItemSf(e.target.value);
      this.props.enhance.handleChangeSfStat();
    } else {
      this.setState({
        msg: {
          msgStatus: true,
          content: '일반강화 스탯을 먼저 입력해주세요',
        },
      });
    }
  }

  handleClassChange = (e) => {
    this.setState({
      getClass: {
        value: e.target.value,
        name: e.target.name,
      },
    });
    this.props.enhance.setItemClass(e.target.value);
  }

  handleEvaluate = () => {
    if (this.state.getClass.value === '') {
      this.setState({
        msg: {
          msgStatus: true,
          content: '직업을 선택해주세요',
        },
      });
    } else {
      this.props.enhance.evaluateItem();
    }
  }

  onReset = () => {
    this.props.handleStateChange();
    this.props.enhance.initReset();
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
              <MenuItem name={'1성'} value={0}>0성</MenuItem>
              <MenuItem name={'1성'} value={1}>1성</MenuItem>
              <MenuItem name={'2성'} value={2}>2성</MenuItem>
              <MenuItem name={'3성'} value={3}>3성</MenuItem>
              <MenuItem name={'4성'} value={4}>4성</MenuItem>
              <MenuItem name={'5성'} value={5}>5성</MenuItem>
              <MenuItem name={'6성'} value={6}>6성</MenuItem>
              <MenuItem name={'7성'} value={7}>7성</MenuItem>
              <MenuItem name={'8성'} value={8}>8성</MenuItem>
              <MenuItem name={'9성'} value={9}>9성</MenuItem>
              <MenuItem name={'10성'} value={10}>10성</MenuItem>
              <MenuItem name={'11성'} value={11}>11성</MenuItem>
              <MenuItem name={'12성'} value={12}>12성</MenuItem>
              <MenuItem name={'13성'} value={13}>13성</MenuItem>
              <MenuItem name={'14성'} value={14}>14성</MenuItem>
              <MenuItem name={'15성'} value={15}>15성</MenuItem>
              <MenuItem name={'16성'} value={16}>16성</MenuItem>
              <MenuItem name={'17성'} value={17}>17성</MenuItem>
              <MenuItem name={'18성'} value={18}>18성</MenuItem>
              <MenuItem name={'19성'} value={19}>19성</MenuItem>
              <MenuItem name={'20성'} value={20}>20성</MenuItem>
              <MenuItem name={'21성'} value={21}>21성</MenuItem>
              <MenuItem name={'22성'} value={22}>22성</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.sfControl}>
            <InputLabel>직업</InputLabel>
            <Select
              name={this.state.getClass.name}
              value={this.state.getClass.value}
              onChange={this.handleClassChange}
            >
              <MenuItem name={'해적'} value={'pirate'}>해적</MenuItem>
              <MenuItem name={'전사'} value={'warrior'}>전사</MenuItem>
              <MenuItem name={'도적'} value={'thief'}>도적</MenuItem>
              <MenuItem name={'마법사'} value={'wizard'}>마법사</MenuItem>
              <MenuItem name={'궁수'} value={'archer'}>궁수</MenuItem>
              <MenuItem name={'데몬어벤져'} value={'daemon'}>데몬어벤져</MenuItem>
              <MenuItem name={'제논'} value={'jaenon'}>제논</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={2} className={classes.nameText}>스탯</Grid>
          <Grid item xs={2} className={classes.nameText}>기본옵션</Grid>
          <Grid item xs={2} className={classes.nameText}>스타포스</Grid>
          <Grid item xs={2} className={classes.nameText}>추가옵션</Grid>
          <Grid item xs={2} className={classes.nameText}>일반강화스탯</Grid>
          <Grid item xs={2} className={classes.nameText}>확인</Grid>
        </Grid>
        <EnhanceStatCard titleColor={enhance.setClassStatFont('mg_atk', this.state.getClass.value)} statName={'마력'} name={'mg_atk'} opt={enhance.item.mg_atk} starforce={this.state.getSf.value} />
        <EnhanceStatCard titleColor={enhance.setClassStatFont('atk', this.state.getClass.value)} statName={'공격력'} name={'atk'} opt={enhance.item.atk} starforce={this.state.getSf.value} />
        <EnhanceStatCard titleColor={enhance.setClassStatFont('str', this.state.getClass.value)} statName={'str'} name={'str'} opt={enhance.item.str} starforce={this.state.getSf.value} />
        <EnhanceStatCard titleColor={enhance.setClassStatFont('dex', this.state.getClass.value)} statName={'dex'} name={'dex'} opt={enhance.item.dex} starforce={this.state.getSf.value} />
        <EnhanceStatCard titleColor={enhance.setClassStatFont('luk', this.state.getClass.value)} statName={'luk'} name={'luk'} opt={enhance.item.luk} starforce={this.state.getSf.value} />
        <EnhanceStatCard titleColor={enhance.setClassStatFont('int', this.state.getClass.value)} statName={'int'} name={'int'} opt={enhance.item.int} starforce={this.state.getSf.value} />
        <EnhanceStatCard titleColor={enhance.setClassStatFont('hp', this.state.getClass.value)} statName={'HP'} name={'hp'} opt={enhance.item.hp} starforce={this.state.getSf.value} />
        <EnhanceStatCard titleColor={enhance.setClassStatFont('mp', this.state.getClass.value)} statName={'MP'} name={'mp'} opt={enhance.item.mp} starforce={this.state.getSf.value} />
        <EnhanceStatCard titleColor={enhance.setClassStatFont('monster_def', this.state.getClass.value)} statName={'방무(%)'} name={'monster_def'} opt={enhance.item.monster_def} starforce={this.state.getSf.value} />
        <EnhanceStatCard titleColor={enhance.setClassStatFont('boss_atk', this.state.getClass.value)} statName={'보공(%)'} name={'boss_atk'} opt={enhance.item.boss_atk} starforce={this.state.getSf.value} />
        <EnhanceStatCard titleColor={enhance.setClassStatFont('damage', this.state.getClass.value)} statName={'데미지(%)'} name={'damage'} opt={0} starforce={this.state.getSf.value} />
        <EnhanceStatCard titleColor={enhance.setClassStatFont('allstat', this.state.getClass.value)} statName={'올스탯(%)'} name={'allstat'} opt={0} starforce={this.state.getSf.value} />
        <EnhanceStatCard titleColor={enhance.setClassStatFont('chackgam', this.state.getClass.value)} statName={'착감'} name={'chackgam'} opt={0} starforce={this.state.getSf.value} />
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Button
              className={classes.buttonClass}
              onClick={this.onReset}
              variant="outlined"
            >
              초기화
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Button
              className={classes.buttonClass}
              onClick={this.handleEvaluate}
              variant="outlined"
            >
              분석하기
            </Button>
          </Grid>
        </Grid>
        <MessageDialog
          open={this.state.msg.msgStatus}
          onClose={this.closeMsgDialog}
          content={this.state.msg.content}
        />
      </div>
    );
  }
}

export default withStyles(styles)(EnhanceInputForm);
