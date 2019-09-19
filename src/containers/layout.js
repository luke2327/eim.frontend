import React, {Component, Fragment} from 'react';
import Head from 'head';
import MainMedition from 'containers/mainMedition';
import { IntlProvider } from 'react-intl';
import locale from 'assets/locale';
import { observer, inject } from 'mobx-react';
import style from 'styles/styles.sass';
import custom_bootstrap from 'styles/custom_bootstrap.sass';

@inject('common')
@observer
class Layout extends Component{
  render() {
    const { common } = this.props;
    const defaultLang = common.selectedLang || navigator.language.split(/[-_]/)[0];

    return(
      <IntlProvider
        locale={defaultLang}
        messages={locale[defaultLang]}
      >
        <Fragment>
          <Head></Head>
          <MainMedition></MainMedition>
        </Fragment>
      </IntlProvider>
    )
  }
}

export default Layout