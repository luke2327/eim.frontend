import React, { Component } from 'react';
import { toJS } from 'mobx';
import _ from 'lodash';

class CubeItemModal extends Component {
  render() {
    const { simulate } = this.props;
    return (
      <div className="fade-in-short">
        {
          this.props.modalKey === 'rootAbyss'
            ? _.map(toJS(simulate.cubeItemRootAbyss), (data) => {
              return (
                <div onClick={() => simulate.selectAltarItem(data)} className="flexible-inline jf-center cursor-pointer fade-in-short item-size" key={data.id}>
                  <img alt="weapon" src={simulate.generateIcon(data.id)} />
                </div>
              );
            })
            : null
        }
        {
          this.props.modalKey === 'absolab'
            ? _.map(toJS(simulate.cubeItemAbsolab), (data) => {
              return (
                <div onClick={() => simulate.selectAltarItem(data)} className="flexible-inline jf-center cursor-pointer fade-in-short item-size" key={data.id}>
                  <img alt="weapon" src={simulate.generateIcon(data.id)} />
                </div>
              );
            })
            : null
        }
        {
          this.props.modalKey === 'arcaneUmbra'
            ? _.map(toJS(simulate.cubeItemArcaneUmbra), (data) => {
              return (
                <div onClick={() => simulate.selectAltarItem(data)} className="flexible-inline jf-center cursor-pointer fade-in-short item-size" key={data.id}>
                  <img alt="weapon" src={simulate.generateIcon(data.id)} />
                </div>
              );
            })
            : null
        }
      </div>
    );
  }
}

export default CubeItemModal;
