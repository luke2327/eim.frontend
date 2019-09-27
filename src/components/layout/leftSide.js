// temp component
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LeftSideCpt extends Component {
  render() {
    return (
      <div className="temp-side-cpt flex-vertical">
        <Link to="/dev">
          <img alt="dev" src="http://cfile222.uf.daum.net/image/9974BF3C5AA23B891EE1CA" />
        </Link>
        <h4>개발자의 인형</h4>
      </div>
    );
  }
}
