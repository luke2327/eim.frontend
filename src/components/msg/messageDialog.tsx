import React, { Component } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText } from '@material-ui/core';

interface Props {
  open: boolean,
  onClose: any, //아벨에게 검증이 필요함
  content: string,
}

class MessageDialog extends Component<Props> {
  render() {
    const { open, onClose, content } = this.props;

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">알림</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary" autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default MessageDialog;
