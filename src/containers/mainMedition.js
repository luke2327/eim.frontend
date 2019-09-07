import React, { Component, Fragment } from 'react';
import EnhanceEquipCpt from 'components/enhance/enhanceEquip';
import YoutubeListCpt from 'components/youtube_list/youtubeList';
import MainView from 'containers/mainView';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

class MainMedition extends Component {
  render () {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={MainView}></Route>
            <Route exact path="/enhance/enhanceEquip" component={EnhanceEquipCpt}></Route>
            <Route exact path="/youtube_list/youtubeList" component={YoutubeListCpt}></Route>
          </Switch>
        </Router>
      </Fragment>

    )
  }
}

export default MainMedition;