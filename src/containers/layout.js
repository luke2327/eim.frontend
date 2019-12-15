import React, { Component, Fragment } from 'react';
import Head from '../head';
import MainMedition from './mainMedition';
import { IntlProvider } from 'react-intl';
import locale from '../assets/locale';
import { observer, inject } from 'mobx-react';
// eslint-disable-next-line no-unused-vars
import style from '../styles/styles.sass';
// eslint-disable-next-line no-unused-vars
import customBootstrap from '../styles/custom_bootstrap.sass';
// eslint-disable-next-line no-unused-vars
import customMaterial from '../styles/custom_material.sass';
// eslint-disable-next-line no-unused-vars
import enhance from '../styles/enhance.sass';
// eslint-disable-next-line no-unused-vars
import simulate from '../styles/simulate.sass';
// eslint-disable-next-line no-unused-vars
import vod from '../styles/vod.sass';
// eslint-disable-next-line no-unused-vars
import calculate from '../styles/calculate.sass';


@inject('common')
@observer
class Layout extends Component{
  render() {
    const { common } = this.props;
    const defaultLang = common.statedLanguage || common.defaultLang;

    return (
      <IntlProvider
        locale={defaultLang}
        messages={locale[defaultLang]}
      >
        <Fragment>
          <Head common={common} />
          <MainMedition />
        </Fragment>
      </IntlProvider>
    );
  }
}

export default Layout;
