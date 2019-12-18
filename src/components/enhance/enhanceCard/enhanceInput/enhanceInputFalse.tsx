import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Button, createStyles } from '@material-ui/core';
import EnhanceInputDialog from './enhanceInputDialog';
import EnhanceStore from 'stores/enhanceStore';

const styles = () => (
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      marginTop: 350,
    },
    textMargin: {
      margin: 10,
    },
  })
);

interface Props {
  classes: {
    root: string,
    textMargin: string,
  };
  enhance: EnhanceStore;
  handleStateChange: () => void;
}

class EnhanceInputFalse extends Component<Props> {
  state = {
    registDialogState: false,
  };

  OpenDialog = () => {
    this.setState({
      registDialogState: true,
    });
  }

  CloseDialog = () => {
    this.setState({
      registDialogState: false,
    });
  }
  ClickItemDialog = () => {
    this.setState({
      registDialogState: false,
    });
    this.props.handleStateChange();
  }

  render() {
    const { classes, enhance } = this.props;

    return (
      <Box className={classes.root}>
        <Box className={classes.textMargin}>
          <div>등록된 장비가 없습니다</div>
          <div>분석할 장비를 등록해보세요</div>
        </Box>
        <Button
          variant="outlined"
          name="registDialogState"
          onClick={this.OpenDialog}
        >
          장비등록하기
        </Button>
        <EnhanceInputDialog
          enhance={enhance}
          open={this.state.registDialogState}
          clickItem={this.ClickItemDialog}
          onClose={this.CloseDialog}
          name="registDialogState"
        />
      </Box>
    );
  }
}

export default withStyles(styles)(EnhanceInputFalse);
