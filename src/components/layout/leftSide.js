// temp component
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LeftSideCpt extends Component {
  render() {
    return (
      <div className="temp-side-cpt flex-vertical">
        <Link to="/dev">
          <img alt="dev" src="https://t1.daumcdn.net/cfile/tistory/2451284850E8CB903A" />
        </Link>
        <h4>개발자의 인형</h4>
      </div>
    );
  }
}
