import React, { Component, Fragment } from 'react';
import Head from 'head';
import MainMedition from 'containers/mainMedition';
import { IntlProvider } from 'react-intl';
import locale from 'assets/locale';
import { observer, inject } from 'mobx-react';
// eslint-disable-next-line no-unused-vars
import style from 'styles/styles.sass';
// eslint-disable-next-line no-unused-vars
import customBootstrap from 'styles/custom_bootstrap.sass';

@inject('common')
@observer
class Layout extends Component {
  render() {
    const { common } = this.props;
    const defaultLang = common.selectedLang || common.defaultLang;

    return (
      <IntlProvider
        locale={defaultLang}
        messages={locale[defaultLang]}
      >
        <Fragment>
          <Head />
          <MainMedition />
        </Fragment>
      </IntlProvider>
    );
  }
}

export default Layout;
