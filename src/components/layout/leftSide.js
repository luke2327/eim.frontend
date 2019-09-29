// temp component
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LeftSideCpt extends Component {
  render() {
    return (
      <div className="temp-side-cpt flex-vertical">
        <Link to="/dev">
          <img alt="dev" src="https://pics.prcm.jp/022b7837c2e33/81774764/png/81774764_220x220.png" />
        </Link>
        <h4>개발자의 인형</h4>
      </div>
    );
  }
}
