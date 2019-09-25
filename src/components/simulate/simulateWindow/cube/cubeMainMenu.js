import React, { Component } from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { toJS } from 'mobx';
import _ from 'lodash';
import itemApi from 'libs/api/item';
import CubeItemModal from './cubeItemModal';

class CubeMainMenu extends Component {
  state = {
    cubeItemModal: false,
    cubeItemModalKey: '',
  }

  fillItemList = async (given, minItemLevel, maxItemLevel, category) => {
    const req = {
      minItemLevel: minItemLevel,
      maxItemLevel: maxItemLevel,
      category: category,
      isCash: 0,
    };

    this.setState({
      cubeItemModalKey: given,
    });

    switch (given) {
      case 'rootAbyss': {
        if (this.props.simulate.cubeItemRootAbyss) {
          this.setState({
            cubeItemModal: !this.state.cubeItemModal,
          });
        } else {
          const result = await itemApi.getSimulateItemByCube(req);

          this.props.simulate.cubeItemRootAbyss = result.data;

          this.setState({
            cubeItemModal: !this.cubeItemModal,
          });
        }

        break;
      } case 'absolab': {
        if (this.props.simulate.cubeItemAbsolab) {
          this.setState({
            cubeItemModal: !this.state.cubeItemModal,
          });
        } else {
          const result = await itemApi.getSimulateItemByCube(req);

          this.props.simulate.cubeItemAbsolab = result.data;

          this.setState({
            cubeItemModal: !this.cubeItemModal,
          });
        }

        break;
      } case 'arcaneUmbra': {
        if (this.props.simulate.cubeItemArcaneUmbra) {
          this.setState({
            cubeItemModal: !this.state.cubeItemModal,
          });
        } else {
          const result = await itemApi.getSimulateItemByCube(req);

          this.props.simulate.cubeItemArcaneUmbra = result.data;

          this.setState({
            cubeItemModal: !this.cubeItemModal,
          });
        }

        break;
      }
      default: {
        break;
      }
    }
  };

  render() {
    const { simulate } = this.props;
    console.log(simulate);
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
                    onClick={() => this.fillItemList(key, data.minItemLevel, data.maxItemLevel, data.category)}
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
              <CubeItemModal simulate={simulate} modalKey={this.state.cubeItemModalKey} />
            )
            : null
        }
      </div>
    );
  }
}

export default CubeMainMenu;
