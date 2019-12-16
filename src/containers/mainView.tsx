import React, { Component } from 'react';
import LeftSide from '../components/layout/leftSide';
import RightSide from '../components/layout/rightSide';
import CenterTop from '../components/layout/centerTop';
import CenterCenter from '../components/layout/centerCenter';

export default class MainView extends Component {
  render() {
    return (
      <div className="main-view container-default default center-flex margin-center-hori">
        <div className="between-flex w100p">
          <LeftSide />
          <div className="w100p flexible main-center-container">
            <CenterTop />
            <CenterCenter />
          </div>
          <RightSide />
        </div>
      </div>
    );
  }
}
