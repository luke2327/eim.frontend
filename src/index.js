import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Layout from 'containers/layout';
import * as serviceWorker from './serviceWorker';
import EnhanceStore from 'stores/enhance';
import CommonStore from 'stores/commonStore';
import CrawlingStore from 'stores/crawlingStore';

const enhance = new EnhanceStore(),
      common = new CommonStore(),
      crawling = new CrawlingStore();

ReactDOM.render(
  <Provider 
    enhance={enhance}
    common={common}
    crawling={crawling}
  >
    <Layout />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
