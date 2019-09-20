import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import {　FormattedMessage, FormattedHTMLMessage } from 'react-intl';

@inject('common')
@observer
class HeaderCpt extends Component {
  constructor () {
    super();

    this.state = {
      showDropdownMenu: false,
    }

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
  }
  
  showDropdownMenu (event) {
    event.preventDefault();

    this.setState({
      showDropdownMenu: !this.state.showDropdownMenu,
    });
  }

  render () {
    const { common } = this.props;
    return (
      <div className="start-flex header">
        <div className="default between-flex w100p margin-center-hori hedaer-line">
          <div className="header-left">
            <Link className="btn-side-step" to="/">
              <div className="btn btn-primary">
                <FormattedMessage id="header.home"></FormattedMessage>
              </div>
            </Link>
            <Link className="btn-side-step" to="/enhance/enhanceEquip">
              <div className="btn btn-primary">
                <FormattedMessage id="header.enhance"></FormattedMessage>
              </div>
            </Link>
            <Link className="btn-side-step" to="/youtube_list/youtubeList">
              <div className="btn btn-primary">
                <FormattedMessage id="header.youtubeList"></FormattedMessage>
              </div>
            </Link>
            <Link className="btn-side-step" to="/notice/notice">
              <div className="btn btn-primary">
                <FormattedMessage id="header.notice"></FormattedMessage>
              </div>
            </Link>
          </div>
          <div className="header-right">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" onClick={this.showDropdownMenu}>
                Dropdown button
              </button>
              {
                this.state.showDropdownMenu
                ? (
                    <div className="dropdown-menu">
                      {
                        common.defaultLangList.map((language, i) => 
                            <span key={i} className="dropdown-item" onClick={() => { common.selectLang(language) }}>{language}</span>
                        )
                      }
                    </div>
                  )
                : (
                    null
                  )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderCpt;