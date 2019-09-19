import React, {Component, Fragment} from 'react';
import Head from 'head';
import MainMedition from 'containers/mainMedition';
import style from 'styles/styles.sass';

class Layout extends Component{
  render() {
    return(
      <Fragment>
        <Head></Head>
        <MainMedition></MainMedition>
      </Fragment>
    )
  }
}

export default Layout