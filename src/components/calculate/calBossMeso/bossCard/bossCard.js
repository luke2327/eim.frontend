import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Card, CardMedia, Typography, Divider } from '@material-ui/core';

const styles = (theme) => ({
  difficultyButton: {
    width: '80%',
    margin: 5,
  },
});

class BossCard extends Component {
  render() {
    const { classes, data } = this.props;
    return (
      <Card className="boss-card">
        <CardMedia
          className="boss-card-cover"
          image="https://images.mypetlife.co.kr/content/uploads/2019/04/11132622/dog-3397110_960_720.jpg"
        />
        <div className="boss-card-detail">
          <Typography variant="h5" className="black-font">{data.name}</Typography>
          <Divider variant="middle" />
          {
            (
              _.map(data.rankList, (o, index) => {
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
