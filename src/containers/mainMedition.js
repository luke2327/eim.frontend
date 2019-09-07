import React, { Component, Fragment } from 'react';
import EnhanceEquipCpt from 'components/enhance/enhanceEquip';
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
          </Switch>
        </Router>
      </Fragment>

    )
  }
}

export default MainMedition;