import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import CubeMainMenu from './cubeMainMenu';
import ItemPotential from './itemPotential';
import itemApi from 'libs/api/item';
import _ from 'lodash';

@inject('simulate')
@inject('common')
@observer
class SimulateCube extends Component {
  componentDidMount() {
    this.loadItemList();
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
  }
  render() {
    const { simulate, common } = this.props;
    return (
      <div id="cube" className="default margin-center-hori start-flex-vertical">
        <div className="main-cube-zone">
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
                    <img alt="altarItem" src={simulate.generateIcon(simulate.altarItem.id)} />
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
