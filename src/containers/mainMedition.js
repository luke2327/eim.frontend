import React, { Component, Fragment } from 'react';
import EnhanceEquipCpt from 'components/enhance/enhanceEquip';
import SimulateEquipCpt from 'components/simulate/simulateEquip';
import YoutubeListCpt from 'components/youtube_list/youtubeList';
import HeaderCpt from 'components/header/header';
import FooterCpt from 'components/footer/footer';
import NoticeCpt from 'components/notice/notice';
import MainView from './mainView';
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
            <Route exact path="/simulate/simulateEquip" component={SimulateEquipCpt} />
            <Route exact path="/youtube_list/youtubeList" component={YoutubeListCpt} />
            <Route exact path="/notice/notice" component={NoticeCpt} />
          </Switch>
          <FooterCpt />
        </Router>
      </Fragment>
    );
  }
}

export default MainMedition;
