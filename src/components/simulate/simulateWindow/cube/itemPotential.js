import React, { Component } from 'react';
import _ from 'lodash';
import { toJS } from 'mobx';

class ItemPotential extends Component {
  state = {
    potentialList: [],
  }

  componentDidMount() {
    this.props.simulate.potentialListByLevel = toJS(this.props.simulate.potentialListByLevel);
    this.loadPotentialList();
  }

  loadPotentialList = () => {
    _.map(toJS(this.props.simulate.potentialListByLevel), (potentialList, potentialLevel) => {
      if (parseInt(potentialLevel) === this.props.simulate.specifiedPotentialLevel) {
        this.setState({
          potentialList: potentialList,
        });
      }
    });
  }

  render() {
    return (
      <div>
        {
          this.state.potentialList
            ? (
              _.map(this.state.potentialList, (potential, idx) => {
                return <div key={idx}>{potential}</div>;
              })
            )
            : (
              <div>loading</div>
            )
        }
      </div>
    );
  }
}

export default ItemPotential;
