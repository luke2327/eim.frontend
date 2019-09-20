import React, { Component } from 'react';
import LeftSideCpt from 'components/layout/leftSide';
import RightSideCpt from 'components/layout/rightSide';
import CenterTopCpt from 'components/layout/centerTop';
import CenterCenterCpt from 'components/layout/centerCenter';

export default class MainView extends Component {
  render() {
    return (
      <div className="main-view default center-flex margin-center-hori">
        <div className="between-flex w100p">
          <LeftSideCpt></LeftSideCpt>
          <div className="w100p flexible main-center-container">
            <CenterTopCpt></CenterTopCpt>
            <CenterCenterCpt></CenterCenterCpt>
          </div>
          <RightSideCpt></RightSideCpt>
        </div>
      </div>
    );
  }
}