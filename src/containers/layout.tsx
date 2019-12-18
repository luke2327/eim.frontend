import React, { Component, Fragment } from 'react';
import Head from 'head';
import locale from 'assets/locale';
import MainModerator from './mainModerator';
import CommonStore from 'stores/commonStore';
import { IntlProvider } from 'react-intl';
import { observer, inject } from 'mobx-react';
import { SUPPORTED_LANGUAGE } from 'models/common/supportedLanguage.type';
import 'styles/styles.sass';
import 'styles/custom_bootstrap.sass';
import 'styles/custom_material.sass';
import 'styles/enhance.sass';
import 'styles/simulate.sass';
import 'styles/vod.sass';
import 'styles/calculate.sass';

interface Props {
  common: CommonStore;
}

@inject('common')
@observer
class Layout extends Component<Props> {
  render() {
    const { common } = this.props;
    const defaultLang: SUPPORTED_LANGUAGE = common.statedLanguage || common.defaultLang;

    return (
      <IntlProvider
        locale={defaultLang}
        messages={locale[defaultLang]}
      >
        <Fragment>
          <Head common={common} />
          <MainModerator />
        </Fragment>
      </IntlProvider>
    );
  }
}

export default Layout;
