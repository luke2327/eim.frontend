import React, { Component, Fragment } from 'react';
import HeaderCpt from 'components/header/header';
import FooterCpt from 'components/footer/footer';

class MainView extends Component {
  render() {
    return (
      <Fragment>
        <HeaderCpt></HeaderCpt>
        <FooterCpt></FooterCpt>
      </Fragment>
    );
  }
}

export default MainView;