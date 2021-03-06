import React, { Component } from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('simulate')
@observer
class ItemPotential extends Component {
  state = {
    potentialList: [],
    potentialLabel: '',
    potential: this.props.simulate.potential,
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
          simulate.potential
            ? (
              _.map(toJS(simulate.potential), (potential, key) => {
                return <div className="potential-name w100p t-align-center" key={key}>{potential}</div>;
              })
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default ItemPotential;
