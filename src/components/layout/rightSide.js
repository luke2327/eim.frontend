// temp component
import React, { Component } from 'react';
import VodList from 'components/vod/vodList';

export default class RightSideCpt extends Component {
  render() {
    return (
      <div className="temp-side-cpt center-flex">
        <VodList />
      </div>
    );
  }
}
