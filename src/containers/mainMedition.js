import React, { Component, Fragment } from 'react';
import EnhanceEquipCpt from 'components/enhance/enhanceEquip';
import SimulateCpt from 'components/simulate/simulate';
import SimulateCube from 'components/simulate/simulateWindow/cube/cube';
import SimulateEnchant from 'components/simulate/simulateWindow/enchant/enchant';
import SimulateSurgery from 'components/simulate/simulateWindow/surgery/surgery';
import SimulateStarforce from 'components/simulate/simulateWindow/starforce/starforce';
import YoutubeListCpt from 'components/youtube_list/youtubeList';
import CalculateCpt from 'components/calculate/calculate';
import HeaderCpt from 'components/header/header';
import FooterCpt from 'components/footer/footer';
import NoticeCpt from 'components/notice/notice';
import MainView from './mainView';
import DevCpt from 'components/dev/dev';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

class MainMedition extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <HeaderCpt />
          <Switch>
            <Route exact path="/" component={MainView} />
            <Route exact path="/enhance/enhanceEquip" component={EnhanceEquipCpt} />
            <Route exact path="/calculate" component={CalculateCpt} />
            <Route exact path="/simulate" component={SimulateCpt} />
            <Route exact path="/simulate/simulate_equip/cube" component={SimulateCube} />
            <Route exact path="/simulate/simulate_equip/enchant" component={SimulateEnchant} />
            <Route exact path="/simulate/simulate_equip/starforce" component={SimulateStarforce} />
            <Route exact path="/simulate/simulate_effect/surgery" component={SimulateSurgery} />
            <Route exact path="/youtube_list/youtubeList" component={YoutubeListCpt} />
            <Route exact path="/notice/notice" component={NoticeCpt} />
            <Route exact path="/dev" component={DevCpt} />
          </Switch>
          {/* <FooterCpt /> */}
        </Router>
      </Fragment>
    );
  }
}

export default MainMedition;
