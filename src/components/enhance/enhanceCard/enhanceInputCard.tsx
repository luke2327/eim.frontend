import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import EnhanceInputFalse from './enhanceInput/enhanceInputFalse';
import EnhanceInputForm from './enhanceInput/enhanceInputForm';
import EnhanceStore from '../../../stores/enhanceStore';

interface Props {
  enhance: EnhanceStore,
}
class EnhanceInputCard extends Component<Props> {
  state = {
    inputState: false as boolean,
  }

  handleStateChange = () => {
    this.setState({
      inputState: !this.state.inputState,
    });
  };

  render() {
    const { enhance } = this.props;
    return (
      <Box>
        {
          this.state.inputState ?
            <EnhanceInputForm enhance={enhance} handleStateChange={this.handleStateChange} /> :
            <EnhanceInputFalse enhance={enhance} handleStateChange={this.handleStateChange} />
        }
      </Box>
    );
  }
}

export default EnhanceInputCard;
