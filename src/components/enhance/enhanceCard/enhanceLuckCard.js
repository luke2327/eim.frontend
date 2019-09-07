import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Card } from '@material-ui/core';

const styles = theme => ({
    month_text: {
        marginTop: theme.spacing(2),
        color: "#5C90D2"
    },
    today_text: {
        marginTop: theme.spacing(2),
        color: "#43A047"
    },
    all_text: {
        marginTop: theme.spacing(2),
        color: "#5E35B1"
    },
    small_text: {
        marginLeft: theme.spacing(1),
        fontSize:"18px",
        color: "#333333"
    },
    board_paper: {
        padding: theme.spacing(7),
        textAlign: 'center',        
    }
});

class EnhanceLuckCard extends Component {


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
            <Card className={classes.board_paper}>
                <Typography variant="h4" gutterBottom>
                    <small className={classes.small_text}>오늘의 </small>
                    {title}
                    <small className={classes.small_text}>날씨는</small>
                    </Typography>
                <Typography variant="h3" className={this.setFontColor()}>{content}</Typography>
            </Card>
        );
    }
}

export default withStyles(styles)(EnhanceLuckCard);