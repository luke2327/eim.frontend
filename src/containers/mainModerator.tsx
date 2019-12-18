import React, { Component, Fragment } from 'react';
import EnhanceEquip from 'components/enhance/enhanceEquip';
import Simulate from './simulate/simulate';
import SimulateCube from './simulate/cube/cube';
import SimulateEnchant from 'components/simulate/enchant/enchant';
import SimulateSurgery from 'components/simulate/surgery/surgery';
import SimulateStarforce from 'components/simulate/starforce/starforce';
import VodList from 'components/vod/vodList';
import Calculate from 'components/calculate/calculate';
import HeaderCpt from './header/header';
import Footer from './footer/footer';
import Notice from 'components/notice/notice';
import MainView from './mainView';
import Development from 'components/dev/dev';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

class MainModerator extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <HeaderCpt />
          <Switch>
            <Route exact path="/" component={MainView} />
            <Route exact path="/enhance/enhanceEquip" component={EnhanceEquip} />
            <Route exact path="/calculate" component={Calculate} />
            <Route exact path="/simulate" component={Simulate} />
            <Route exact path="/simulate/simulate_equip/cube" component={SimulateCube} />
            <Route exact path="/simulate/simulate_equip/enchant" component={SimulateEnchant} />
            <Route exact path="/simulate/simulate_equip/starforce" component={SimulateStarforce} />
            <Route exact path="/simulate/simulate_effect/surgery" component={SimulateSurgery} />
            <Route exact path="/vod/vodList" component={VodList} />
            <Route exact path="/notice/notice" component={Notice} />
            <Route exact path="/dev" component={Development} />
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    );
  }
}

export default MainModerator;
