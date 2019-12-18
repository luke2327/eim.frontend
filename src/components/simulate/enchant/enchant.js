import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import CubeMainMenu from '../cube/cubeMainMenu';
import { toJS } from 'mobx';
import itemApi from '../../../libs/api/item';


@inject('simulate')
@inject('common')
@observer
class SimulateEnchant extends Component {
  render() {
    const { simulate, common } = this.props;

    return (
      <div id="enchant" className="default margin-center-hori start-flex-vertical fade-in">
        <div className="main-menu-zone">
          <CubeMainMenu simulate={simulate} common={common} />
        </div>
        <div className="hori-line" />
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
        </div>
      </div>
    );
  }
}

export default SimulateEnchant;
