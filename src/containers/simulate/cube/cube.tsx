import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import CubeMainMenu from 'components/simulate/cube/cubeMainMenu';
import CubeMethod from 'components/simulate/cube/cubeMethod';
import CubeCalc from 'components/simulate/cube/cubeCalc';
import ItemPotential from 'components/simulate/cube/itemPotential';
import WearingEquip from 'components/simulate/wearingEquip';
import CommonStore from 'stores/commonStore';
import SimulateStore from 'stores/simulateStore';

interface Props {
  common: CommonStore;
  simulate: SimulateStore;
}

@inject('simulate')
@inject('common')
@observer
class SimulateCube extends Component<Props> {
  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    this.props.simulate.init();
    this.props.simulate.loadItemList();
  }
  render() {
    const { simulate, common } = this.props;
    toJS(simulate.availableCubeList);

    return (
      <div id="cube" className="default margin-center-hori start-flex-vertical fade-in">
        <div
          className={
            simulate.currentPotentialStyle
              ? ['main-cube-zone', simulate.currentPotentialStyle].join(' ')
              : 'main-cube-zone'
          }
        >
          <div>
            {
              simulate.altarItem
                ? (
                  toJS(simulate.altarItem[`name_${common.statedLanguage}`])
                )
                : (
                  <p>item name</p>
                )
            }
          </div>
          <div className="cube-above center-flex margin-center-hori">
            <div className="altar-item center-flex margin-center-hori">
              {
                simulate.altarItem
                  ? (
                    <img alt="altarItem" src={simulate.generateIcon(simulate.altarItem.item_no)} />
                  )
                  : (
                    <div>Item</div>
                  )
              }
            </div>
          </div>
          <div className="cube-below start-flex-vertical margin-center-hori">
            {
              simulate.altarItem
                ? (
                  <ItemPotential />
                )
                : (
                  <div>option</div>
                )
            }
          </div>
        </div>
        <div className="hori-line" />
        <div className="main-menu-zone">
          <CubeMainMenu simulate={simulate} common={common} />
          <div className="vert-line" />
          <CubeMethod simulate={simulate} />
        </div>
        <div className="hori-line" />
        <div className="side-view">
          <WearingEquip simulate={simulate} />
          <div className="vert-line" />
          <CubeCalc />
        </div>
      </div>
    );
  }
}

export default SimulateCube;
