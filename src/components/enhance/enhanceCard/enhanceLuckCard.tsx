import React, { Component, ReactNode } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, createStyles, Theme } from '@material-ui/core';
import { FormattedHTMLMessage } from 'react-intl';

const styles = (theme: Theme) => (
  createStyles({
    monthText: {
      marginTop: theme.spacing(2),
      color: '#5C90D2',
    },
    todayText: {
      marginTop: theme.spacing(2),
      color: '#43A047',
    },
    allText: {
      marginTop: theme.spacing(2),
      color: '#5E35B1',
    },
    smallText: {
      marginLeft: theme.spacing(1),
      fontSize: '18px',
      color: '#333333',
    },
    boardPaper: {
      padding: theme.spacing(7),
      textAlign: 'center',
    },
  })
);

interface Props {
  classes: {
    monthText: string,
    todayText: string,
    allText: string,
    smallText: string,
    boardPaper: string,
  };
  title: string | number | ReactNode;
  content: string | number;
}

class EnhanceLuckCard extends Component<Props> {
  setFontColor = () => {
    switch (this.props.title) {
      case '스타포스':
        return this.props.classes.monthText;
      case '큐브':
        return this.props.classes.todayText;
      case '젬스톤':
        return this.props.classes.allText;
      default:
        return '';
    }
  }

  render() {
    const { classes, title, content } = this.props;

    return (
      <Card key="key" className={classes.boardPaper}>
        <span key="title" className="enhance-card-object-font">오늘의 {title} 명당은</span>,
        <br key="br" />
        <span key="content" className={[this.setFontColor(), 'enhance-card-channel-font'].join(' ')}>{content}</span> 채널
      </Card>
    );
  }
}

export default withStyles(styles)(EnhanceLuckCard);
