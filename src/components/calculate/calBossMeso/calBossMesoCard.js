import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import bossInfo from 'assets/bossMeso';
import BossCard from './bossCard/bossCard';

class CalBossMesoCard extends Component {
  state = {
    bossInfo: bossInfo.boss,
  }

  testClick = () => {
    console.log('asset : ', bossInfo.boss);
    console.log('state : ', this.state.bossInfo);
  }

  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <div className="boss-meso-log">
              보스 메소 계산로그
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className="boss-meso-select">
              <Grid container spacing={2}>
                {
                  (
                    _.map(this.state.bossInfo, (o, index) => {
                      return (
                        <Grid item xs={6} key={index}>
                          <BossCard data={o} />
                        </Grid>
                      );
                    })
                  )
                }
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div
              className="boss-meso-result"
            >
              12,150,000 메소
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CalBossMesoCard;
