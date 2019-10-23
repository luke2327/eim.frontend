import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Layout from './containers/layout';
import * as serviceWorker from './serviceWorker';
import EnhanceStore from './stores/enhanceStore';
import CommonStore from './stores/commonStore';
import CrawlingStore from './stores/crawlingStore';
import SimulateStore from './stores/simulateStore';
import _ from 'lodash';

const enhance = new EnhanceStore();
const common = new CommonStore();
const crawling = new CrawlingStore();
const simulate = new SimulateStore();

ReactDOM.render(
  <Provider
    enhance={enhance}
    crawling={crawling}
    simulate={simulate}
    common={common}
  >
    <Layout />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
