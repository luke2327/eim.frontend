import React, { Component } from 'react';
import _ from 'lodash';
import { toJS } from 'mobx';

class ItemPotential extends Component {
  state = {
    potentialList: [],
    potentialLabel: '',
  }

  componentDidMount() {
    this.loadPotentialList();
    this.loadPotentialLabel();
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

  loadPotentialLabel = () => {
    _.map(toJS(this.props.simulate.potentialLabelList), (potentialLabel, potentialLevel) => {
      if (parseInt(potentialLevel) === this.props.simulate.specifiedPotentialLevel) {
        this.setState({
          potentialLabel: potentialLabel,
        });
      }
    });
  }

  render() {
    return (
      <div className="potential-zone flexible w100p">
        {
          this.state.potentialLabel
            ? (
              <div className="potential-label w100p t-align-center">{this.state.potentialLabel}</div>
            )
            : (
              null
            )
        }
        <div className="potential-hori-line" />
        {
          this.state.potentialList
            ? (
              _.map(this.state.potentialList, (potential, idx) => {
                return <div className="potential-name w100p t-align-center" key={idx}>{potential}</div>;
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
