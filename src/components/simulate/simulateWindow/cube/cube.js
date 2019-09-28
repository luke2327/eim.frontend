import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import CubeMainMenu from './cubeMainMenu';
import CubeMethod from './cubeMethod';
import ItemPotential from './itemPotential';
import itemApi from 'libs/api/item';
import _ from 'lodash';

@inject('simulate')
@inject('common')
@observer
class SimulateCube extends Component {
  componentDidMount() {
    if (!this.props.simulate.isInitalizeCube) {
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

    _.forEach(toJS(this.props.simulate.defaultAvailableCube), async (req) => {
      const result = await itemApi.getSimulateAvailableByCube(req);
      this.props.simulate.availableCubeList.push(result.data);
    });

    this.props.simulate.isInitalizeCube = 1;
  }
  render() {
    const { simulate, common } = this.props;
    // 이렇게 안해주면 큐브리스트가 뜨지 않는다
    toJS(simulate.availableCubeList);
    return (
      <div id="cube" className="default margin-center-hori start-flex-vertical fade-in">
        <div
          className={simulate.currentPotentialStyle}
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
          <div className="vert-line" />
          <CubeMethod simulate={simulate} />
        </div>
      </div>
    );
  }
}

export default SimulateCube;
