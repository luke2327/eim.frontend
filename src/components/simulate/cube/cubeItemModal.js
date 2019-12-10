import React, { Component } from 'react';
import { toJS } from 'mobx';
import commonUtil from 'libs/utils/commonUtil';

class CubeItemModal extends Component {
  render() {
    const { simulate, common } = this.props;

    return (
      <div className="item-grid fade-in-short">
        {
          this.props.modalKey === 'rootAbyss'
            ? _.map(toJS(simulate.cubeItemRootAbyss), (data) => {
              return (
                <div
                  onClick={() => simulate.selectAltarItem(data)}
                  className="flexible-inline jf-center cursor-pointer fade-in-short item-size"
                  key={data.item_no}
                >
                  <commonUtil.ItemIconTooltip props={data} simulate={simulate} common={common} />
                </div>
              );
            })
            : null
        }
        {
          this.props.modalKey === 'absolab'
            ? _.map(toJS(simulate.cubeItemAbsolab), (data) => {
              return (
                <div
                  onClick={() => simulate.selectAltarItem(data)}
                  className="flexible-inline jf-center cursor-pointer fade-in-short item-size"
                  key={data.item_no}
                >
                  <commonUtil.ItemIconTooltip props={data} simulate={simulate} common={common} />
                </div>
              );
            })
            : null
        }
        {
          this.props.modalKey === 'arcaneUmbra'
            ? _.map(toJS(simulate.cubeItemArcaneUmbra), (data) => {
              return (
                <div
                  onClick={() => simulate.selectAltarItem(data)}
                  className="flexible-inline jf-center cursor-pointer fade-in-short item-size"
                  key={data.item_no}
                >
                  <commonUtil.ItemIconTooltip props={data} simulate={simulate} common={common} />
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
