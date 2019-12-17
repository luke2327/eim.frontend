import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import image from 'assets/bossImage/eim_dusk.png';
import { Button, Card, CardMedia, Typography, Divider } from '@material-ui/core';
import { Theme, createStyles } from '@material-ui/core';
import { BossMesoInfo } from '../../../../models/boss/bossMesoInfo.interface';

const styles = (theme: Theme) => (
  createStyles({
    difficultyButton: {
      width: '80%',
      margin: 5,
    },
  })
);

interface Props {
  classes: {
    difficultyButton: string,
  };
  data: BossMesoInfo;
}

class BossCard extends Component<Props> {

  render() {
    const { classes, data } = this.props;

    return (
      <Card className="boss-card">
        <CardMedia
          className="boss-card-cover"
          image={data.image}
        />
        <div className="boss-card-detail">
          <Typography variant="h5" className="black-font">{data.name}</Typography>
          <Divider variant="middle" />
          {
            (
              data.rankList.map((o, index) => {
                return (
                  <Button
                    color="primary"
                    variant="outlined"
                    key={index}
                    className={classes.difficultyButton}
                  >
                    {o.rank}
                  </Button>
                );
              })
            )
          }
        </div>
      </Card>
    );
  }
}

export default withStyles(styles)(BossCard);
