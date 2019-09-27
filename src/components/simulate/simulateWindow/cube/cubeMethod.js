import React, { Component } from 'react';
import { toJS } from 'mobx';
import _ from 'lodash';

class CubeMethod extends Component {
  render() {
    const { simulate } = this.props;
    return (
      <div className="cube-method w100p">
        {
          simulate.availableCubeList
            ? (
              _.map(_.flatten(toJS(simulate.availableCubeList)), (data, key) => {
                return (
                  <div className="flexible-inline jf-center cursor-pointer fade-in-short item-size" key={key}>
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
