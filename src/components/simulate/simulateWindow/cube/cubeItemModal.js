import React, { Component } from 'react';
import { toJS } from 'mobx';
import _ from 'lodash';

class CubeItemModal extends Component {
  render() {
    const { simulate } = this.props;
    return (
      <div>
        {
          this.props.modalKey === 'rootAbyss'
            ? _.map(toJS(simulate.cubeItemRootAbyss), (data) => {
              return (
                <div onClick={() => simulate.selectAltarItem(data)} className="flexible-inline jf-center cursor-pointer" key={data.id} style={{ margin: '5px', width: '55px', height: '55px', border: '1px solid #e0e0e8' }}>
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
                <div onClick={() => simulate.selectAltarItem(data)} className="flexible-inline jf-center cursor-pointer" key={data.id} style={{ margin: '5px', width: '55px', height: '55px', border: '1px solid #e0e0e8' }}>
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
                <div onClick={() => simulate.selectAltarItem(data)} className="flexible-inline jf-center cursor-pointer" key={data.id} style={{ margin: '5px', width: '55px', height: '55px', border: '1px solid #e0e0e8' }}>
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
