import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJS } from 'mobx';
import { FormattedHTMLMessage } from 'react-intl';
import { inject, observer } from 'mobx-react';
import itemApi from '../../libs/api/item';

@inject('simulate')
@inject('common')
@observer
class SimulateCpt extends Component {
  componentDidMount() {
    this.initialize();
  }

  initialize = () => {
    this.props.simulate.init();
    this.props.simulate.loadItemList();
  }

  render() {
    const { common } = this.props;
    return (
      <div id="simulate" className="default margin-center-hori flexible jf-center fade-in" onClick={() => common.setHeaderTab('simulate')}>
        <Link to="/simulate/simulate_equip/cube" className="s-link">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://mblogthumb-phinf.pstatic.net/20160917_54/replay_world_1474114196467NkWSu_PNG/capture-20160917-210816.png?type=w2" className="card-img-top" alt="..." />
            <div className="card-body end-flex-vertical">
              <div className="s-air" />
              <div className="below">
                <FormattedHTMLMessage
                  id="simulate.cube"
                >
                  {(object) => <h5 className="card-title">{object}</h5>}
                </FormattedHTMLMessage>
                <FormattedHTMLMessage
                  id="simulate.cube.introCard"
                >
                  {(object) => <p className="card-text">{object}</p>}
                </FormattedHTMLMessage>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/simulate/simulate_equip/enchant" className="s-link" onClick={() => common.setHeaderTab('simulate')}>
          <div className="card" style={{ width: '18rem' }}>
            <img
              src="https://mblogthumb-phinf.pstatic.net/20160824_109/replay_world_1472038751864Uc9Uf_PNG/capture-20160824-203858.png?type=w2"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body end-flex-vertical">
              <div className="s-air" />
              <div className="below">
                <FormattedHTMLMessage
                  id="simulate.enchant"
                >
                  {(object) => <h5 className="card-title">{object}</h5>}
                </FormattedHTMLMessage>
                <FormattedHTMLMessage
                  id="simulate.enchant.introCard"
                >
                  {(object) => <p className="card-text">{object}</p>}
                </FormattedHTMLMessage>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/simulate/simulate_equip/starforce" className="s-link" onClick={() => common.setHeaderTab('simulate')}>
          <div className="card" style={{ width: '18rem' }}>
            <img
              src="https://mblogthumb-phinf.pstatic.net/20160905_78/replay_world_14730315598139FBKo_PNG/capture-20160905-082549.png?type=w2"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body end-flex-vertical">
              <div className="s-air" />
              <div className="below">
                <FormattedHTMLMessage
                  id="simulate.starforce"
                >
                  {(object) => <h5 className="card-title">{object}</h5>}
                </FormattedHTMLMessage>
                <FormattedHTMLMessage
                  id="simulate.starforce.introCard"
                >
                  {(object) => <p className="card-text">{object}</p>}
                </FormattedHTMLMessage>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default SimulateCpt;
