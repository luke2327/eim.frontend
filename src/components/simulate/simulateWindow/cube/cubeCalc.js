import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';

@inject('simulate')
@observer
class CubeCalc extends Component {
  render() {
    const { simulate } = this.props;
    return (
      <div id="cube-calc">
        <h4>총 사용 금액</h4>
        <p>{simulate.useTotalCount}</p>
        <div className="calc-hori-line" />
        <h4>사용 큐브</h4>
        <div className="flexible">
          <div className="flex-vertical-start">
            {
              _.map(simulate.availableCubeList, (data, key) => {
                return (
                  <div key={key} className="cube-icon flexible-inline jf-center">
                    <img key={key} alt="cube" src={simulate.generateIcon(data.item_no)} />
                  </div>
                );
              })
            }
          </div>
          <div className="flex-vertical-start">
            <p className="use-m center-flex">{simulate.useRedCubeCount} : {simulate.useRedCubeCount * simulate.defaultRedPrice}</p>
            <p className="use-m center-flex">{simulate.useBlackCubeCount} : {simulate.useBlackCubeCount * simulate.defaultBlackPrice}</p>
            <p className="use-m center-flex">아직 추가 안됨</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CubeCalc;
