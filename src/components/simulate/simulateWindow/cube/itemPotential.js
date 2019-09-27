import React, { Component } from 'react';
import _ from 'lodash';
import { toJS } from 'mobx';

class ItemPotential extends Component {
  state = {
    potentialList: [],
    potentialLabel: '',
  }

  componentDidMount() {
    this.loadPotentialLabel();
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
    const { simulate } = this.props;
    return (
      <div className="potential-zone flexible w100p">
        {
          this.state.potentialLabel
            ? (
              <div className="potential-label w100p t-align-center">{simulate.potentialLabelList[simulate.currentPotentialLevel]}</div>
            )
            : (
              null
            )
        }
        <div className="potential-hori-line" />
        {
          simulate.currentPotentialLevel > 0
            ? (
              <div className="w100p">
                <div className="potential-name w100p t-align-center">{simulate.currentPotential1}</div>
                <div className="potential-name w100p t-align-center">{simulate.currentPotential2}</div>
                <div className="potential-name w100p t-align-center">{simulate.currentPotential3}</div>
              </div>
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
