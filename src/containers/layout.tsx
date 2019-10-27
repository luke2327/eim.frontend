import React, { Component, Fragment } from 'react';
import Head from '../head';
import MainMedition from './mainMedition';
import { IntlProvider } from 'react-intl';
import locale from '../assets/locale';
import { observer, inject } from 'mobx-react';
import commonStore from '../stores/commonStore';
import { SUPPORTED_LANGUAGE } from '../models/language.type';
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


interface Props {
  common?: commonStore;
}

@inject('common')
@observer
class Layout extends Component<Props, {}> {
  render() {
    const common = this.props.common as commonStore;
    const defaultLang = common.selectedLang || common.defaultLang as SUPPORTED_LANGUAGE;

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
