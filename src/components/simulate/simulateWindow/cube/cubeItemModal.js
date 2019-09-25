import React, { Component } from 'react';
import { toJS } from 'mobx';
import _ from 'lodash';

class CubeItemModal extends Component {
  render() {
    const { simulate } = this.props;
    console.log(simulate);
    console.log(this.props.modalKey);
    return (
      <div>
        {
          this.props.modalKey === 'rootAbyss'
            ? _.map(toJS(simulate.cubeItemRootAbyss), (data) => {
              return (
                <div key={data.id}>
                  <img alt="weapon" src={`https://items.maplestory.io/api/kms/323/item/${data.id}/icon`} />
                </div>
              );
            })
            : null
        }
        {
          this.props.modalKey === 'absolab'
            ? _.map(toJS(simulate.cubeItemAbsolab), (data) => {
              return (
                <div key={data.id}>{data.name_ko}</div>
              );
            })
            : null
        }
        {
          this.props.modalKey === 'arcaneUmbra'
            ? _.map(toJS(simulate.cubeItemArcaneUmbra), (data) => {
              return (
                <div key={data.id}>{data.name_ko}</div>
              );
            })
            : null
        }
      </div>
    );
  }
}

export default CubeItemModal;
