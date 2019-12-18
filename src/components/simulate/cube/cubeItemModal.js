import React, { Component } from 'react';
import { toJS } from 'mobx';
import commonUtil from 'libs/utils/commonUtil';

class CubeItemModal extends Component {
  render() {
    const { simulate, common, modalKey } = this.props;

    return (
      <div className="item-grid fade-in-short">
        {
          _.map(toJS(simulate[`cubeItem${_.upperFirst(modalKey)}`]), (data) => {
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
        }
      </div>
    );
  }
}

export default CubeItemModal;
