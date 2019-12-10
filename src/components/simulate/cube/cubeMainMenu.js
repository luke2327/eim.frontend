import React, { Component } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { toJS } from 'mobx';
import CubeItemModal from './cubeItemModal';

class CubeMainMenu extends Component {
  state = {
    cubeItemModal: false,
    cubeItemModalKey: '',
  }

  openSelectModal = async (given) => {
    if (given === this.state.cubeItemModalKey) {
      this.setState({
        cubeItemModal: !this.state.cubeItemModal,
        cubeItemModalKey: given,
      });
    } else {
      this.setState({
        cubeItemModal: true,
        cubeItemModalKey: given,
      });
    }
  };

  render() {
    const { simulate, common } = this.props;

    return (
      <div className="s-item flexible">
        {
          _.map(toJS(simulate.defaultCubeGiven), (data, key) => {
            return (
              <FormattedHTMLMessage
                id={`simulate.${key}`}
                key={key}
              >
                {(object) =>
                  <button
                    onClick={() => this.openSelectModal(key)}
                    className="btn btn-outline-primary"
                    type="button"
                  >
                    {object}
                  </button>}
              </FormattedHTMLMessage>
            );
          })
        }
        {
          this.state.cubeItemModal
            ? (
              <CubeItemModal
                simulate={simulate}
                common={common}
                modalKey={this.state.cubeItemModalKey}
              />
            )
            : null
        }
      </div>
    );
  }
}

export default CubeMainMenu;
