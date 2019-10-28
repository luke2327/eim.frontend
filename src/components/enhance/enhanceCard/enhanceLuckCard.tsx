import React, { Component, ReactNode } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, createStyles, Theme } from '@material-ui/core';
import { FormattedHTMLMessage } from 'react-intl';

const styles = (theme: Theme) => (
  createStyles({
    month_text: {
      marginTop: theme.spacing(2),
      color: '#5C90D2',
    },
    today_text: {
      marginTop: theme.spacing(2),
      color: '#43A047',
    },
    all_text: {
      marginTop: theme.spacing(2),
      color: '#5E35B1',
    },
    small_text: {
      marginLeft: theme.spacing(1),
      fontSize: '18px',
      color: '#333333',
    },
    board_paper: {
      padding: theme.spacing(7),
      textAlign: 'center',
    },
  })
);

interface Props {
  classes: {
    month_text: string,
    today_text: string,
    all_text: string,
    small_text: string,
    board_paper: string,
  },
  title: string | number | ReactNode,
  content: string | number,
}

class EnhanceLuckCard extends Component<Props> {
  setFontColor = () => {
    switch (this.props.title) {
      case '스타포스':
        return this.props.classes.month_text;
      case '큐브':
        return this.props.classes.today_text;
      case '젬스톤':
        return this.props.classes.all_text;
      default:
        return '';
    }
  }


  render() {
    const { classes, title, content } = this.props;

    return (
      <Card key="key" className={classes.board_paper}>
        <span key="title" className="enhance-card-object-font">{title}</span>,
        <br key="br" />
        <span key="content" className={[this.setFontColor(), 'enhance-card-channel-font'].join(' ')}>{content}</span>
      </Card>
    );
  }
}

export default withStyles(styles)(EnhanceLuckCard);
