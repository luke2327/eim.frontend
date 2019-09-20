import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import EnhanceInputFalse from './enhanceInput/enhanceInputFalse';
import EnhanceInputForm from './enhanceInput/enhanceInputForm';

class EnhanceInputCard extends Component {
  constructor() {
    super();

    this.state = {
      inputState: false,
    };
  }

  handleStateChange = () => {
    this.setState({
      inputState: !this.state.inputState,
    });
  };

  render() {
    return (
      <Box>
        {
          this.state.inputState ? <EnhanceInputForm /> : <EnhanceInputFalse handleStateChange={this.handleStateChange} />
        }
      </Box>
    );
  }
}

export default EnhanceInputCard;
