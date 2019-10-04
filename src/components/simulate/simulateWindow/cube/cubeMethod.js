import React, { Component } from 'react';
import { toJS } from 'mobx';
import itemApi from 'libs/api/item';
import _ from 'lodash';

class CubeMethod extends Component {
  transform = async (cube) => {
    if (this.props.simulate.altarItem) {
      const req = {
        potentialLevel: this.props.simulate.currentPotentialLevel,
        cube: cube.item_no,
        reqLevel: this.props.simulate.altarItem.req_level,
        category: this.props.simulate.altarItem.category,
      };

      const result = await itemApi.setPotentialByCube(req);
      this.props.simulate.transformAltarItem(result.data, cube);
    } else {
      alert('우선 아이템을 선택 해 주세요');
    }
  }
  render() {
    const { simulate } = this.props;
    return (
      <div className="cube-method item-grid w100p">
        {
          simulate.availableCubeList
            ? (
              _.map(simulate.availableCubeList, (data, key) => {
                return (
                  <div
                    className="flexible-inline jf-center cursor-pointer fade-in-short item-size"
                    key={key}
                    onClick={() => this.transform(data)}
                  >
                    <img alt="cube" src={simulate.generateIcon(data.item_no)} />
                  </div>
                );
              })
            )
            : (
              <p>loading</p>
            )
        }
      </div>
    );
  }
}

export default CubeMethod;
