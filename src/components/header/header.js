import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { FormattedMessage } from 'react-intl';

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
      <div className="start-flex header">
        <div className="between-flex w100p margin-center-hori hedaer-line">
          <div className="w100p">
            <ul className="nav nav-tabs header-left">
              <div className="between-flex default w100p margin-center-hori">
                <div className="flexible-inline">
                  <li className="nav-item">
                    <Link className={common.selectedHeaderTab === 1 ? [navDefaultClass, 'active'].join(' ') : navDefaultClass} to="/" onClick={() => common.selectHeaderTab(1)}>
                      <FormattedMessage id="header.home" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={common.selectedHeaderTab === 2 ? [navDefaultClass, 'active'].join(' ') : navDefaultClass} to="/enhance/enhanceEquip" onClick={() => common.selectHeaderTab(2)}>
                      <FormattedMessage id="header.enhance" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={common.selectedHeaderTab === 3 ? [navDefaultClass, 'active'].join(' ') : navDefaultClass} to="/youtube_list/youtubeList" onClick={() => common.selectHeaderTab(3)}>
                      <FormattedMessage id="header.youtubeList" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={common.selectedHeaderTab === 4 ? [navDefaultClass, 'active'].join(' ') : navDefaultClass} to="/notice/notice" onClick={() => common.selectHeaderTab(4)}>
                      <FormattedMessage id="header.notice" />
                    </Link>
                  </li>
                </div>
                <div className="dropdown header-right">
                  <button
                    className="btn btn-outline-primary dropdown-toggle"
                    onClick={this.showDropdownMenu}
                    type="button"
                  >
                    Dropdown button
                  </button>
                  {
                    this.state.showDropdownMenu
                      ? (
                        <div className="dropdown-menu">
                          {
                            common.defaultLangList.map((language, i) =>
                              <span key={i} className="dropdown-item" onClick={() => { common.selectLang(language); }}>{language}</span>)
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
