import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

@inject('common')
@observer
class HeaderCpt extends Component {
  constructor() {
    super();

    this.state = {
      showDropdownMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
  }

  showDropdownMenu(e) {
    e.preventDefault();

    this.setState({
      showDropdownMenu: !this.state.showDropdownMenu,
    });
  }

  render() {
    const { common } = this.props;
    const navDefaultClass = 'nav-link';
    return (
      <div id="header" className="start-flex">
        <div className="between-flex w100p margin-center-hori hedaer-line">
          <div className="w100p">
            <ul className="nav nav-tabs header-left">
              <div className="between-flex default w100p margin-center-hori">
                <div className="flexible-inline">
                  <li className="nav-item">
                    <Link
                      className={common.statedHeaderTab === 'home' ? [navDefaultClass, 'active'].join(' ') : navDefaultClass}
                      to="/"
                      onClick={() => common.setHeaderTab('home')}
                    >
                      <FormattedMessage id="header.home" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={common.statedHeaderTab === 'enhance' ? [navDefaultClass, 'active'].join(' ') : navDefaultClass}
                      to="/enhance/enhanceEquip"
                      onClick={() => common.setHeaderTab('enhance')}
                    >
                      <FormattedMessage id="header.enhance" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={common.statedHeaderTab === 'simulate' ? [navDefaultClass, 'active'].join(' ') : navDefaultClass}
                      to="/simulate"
                      onClick={() => common.setHeaderTab('simulate')}
                    >
                      <FormattedMessage id="header.simulate" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={common.statedHeaderTab === 'vod' ? [navDefaultClass, 'active'].join(' ') : navDefaultClass}
                      to="/vod/vodList"
                      onClick={() => common.setHeaderTab('vod')}
                    >
                      <FormattedMessage id="header.vodList" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={common.statedHeaderTab === 'calculate' ? [navDefaultClass, 'active'].join(' ') : navDefaultClass}
                      to="/calculate"
                      onClick={() => common.setHeaderTab('calculate')}
                    >
                      <FormattedMessage id="header.calculate" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={common.statedHeaderTab === 'notice' ? [navDefaultClass, 'active'].join(' ') : navDefaultClass}
                      to="/notice/notice"
                      onClick={() => common.setHeaderTab('notice')}
                    >
                      <FormattedMessage id="header.notice" />
                    </Link>
                  </li>
                </div>
                <div className="dropdown header-right">
                  <FormattedHTMLMessage
                    id="header.language"
                  >
                    {(object) =>
                      <button
                        className="btn btn-outline-primary dropdown-toggle"
                        onClick={this.showDropdownMenu}
                        type="button"
                      >
                        {object}
                      </button>}
                  </FormattedHTMLMessage>
                  {
                    this.state.showDropdownMenu
                      ? (
                        <div className="dropdown-menu">
                          {
                            common.defaultLangList.map((language, i) =>
                              <span key={i} className="dropdown-item cursor-pointer" onClick={() => common.setLanguage(language)}>{language}</span>)
                          }
                        </div>
                      )
                      : (
                        null
                      )
                  }
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderCpt;
