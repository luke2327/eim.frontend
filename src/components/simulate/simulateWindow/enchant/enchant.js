import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import CubeMainMenu from '../cube/cubeMainMenu';
import { toJS } from 'mobx';
import itemApi from 'libs/api/item';
import _ from 'lodash';


@inject('simulate')
@inject('common')
@observer
class SimulateEnchant extends Component {
  componentDidMount() {
    this.initialize();
    if (!this.props.simulate.isInitializeCube) {
      this.loadItemList();
    }
  }

  loadItemList = async () => {
    _.map(toJS(this.props.simulate.defaultCubeGiven), async (req, given) => {
      req.label = given;
      if (given === 'rootAbyss') {
        const result = await itemApi.getSimulateItemByCube(req);
        this.props.simulate.cubeItemRootAbyss = result.data;
      } else if (given === 'absolab') {
        const result = await itemApi.getSimulateItemByCube(req);
        this.props.simulate.cubeItemAbsolab = result.data;
      } else if (given === 'arcaneUmbra') {
        const result = await itemApi.getSimulateItemByCube(req);
        this.props.simulate.cubeItemArcaneUmbra = result.data;
      }
    });

    const req = {
      item_no: this.props.simulate.defaultAvailableCubeList,
    };

    const result = await itemApi.getSimulateAvailableByCube(req);
    this.props.simulate.availableCubeList = result.data;

    this.props.simulate.isInitializeCube = 1;
  }

  initialize = async () => {
    await this.props.simulate.init();
  }

  render() {
    const { simulate, common } = this.props;
    return (
      <div id="enchant" className="default margin-center-hori start-flex-vertical fade-in">
        <div className="main-menu-zone">
          <CubeMainMenu simulate={simulate} />
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
                  toJS(simulate.altarItem[`name_${common.selectedLang}`])
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
