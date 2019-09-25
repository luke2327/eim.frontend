import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import CubeMainMenu from './cubeMainMenu';

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
              {simulate.ss ? simulate.ss : 'item'}
            </div>
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
