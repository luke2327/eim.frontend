import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import CubeMainMenu from './cubeMainMenu';
import ItemPotential from './itemPotential';

@inject('simulate')
@observer
class SimulateCube extends Component {
  render() {
    const { simulate } = this.props;
    return (
      <div id="cube" className="default margin-center-hori center-flex">
        <div className="main-cube-zone">
          <div className="cube-above center-flex margin-center-hori">
            <div className="altar-item center-flex margin-center-hori">
              {
                simulate.altarItem
                  ? (
                    <img alt="altarItem" src={simulate.generateIcon(simulate.altarItem.id)} />
                  )
                  : (
                    <div>Item</div>
                  )
              }
            </div>
          </div>
          <div className="cube-below center-flex margin-center-hori">
            {
              simulate.altarItem
                ? (
                  <ItemPotential simulate={simulate} />
                )
                : (
                  <div>option</div>
                )
            }
          </div>
        </div>
        <div className="hori-line" />
        <div className="main-menu-zone">
          <CubeMainMenu simulate={simulate} />
        </div>
      </div>
    );
  }
}

export default SimulateCube;
