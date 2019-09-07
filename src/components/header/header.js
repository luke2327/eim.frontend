import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderCpt extends Component {
  render () {
    return (
      <div>
        <Link to="/">
          <div className="btn btn-primary">
            홈
          </div>
        </Link>
        <Link to="/enhance/enhanceEquip">
          <div className="btn btn-primary">
            강화로 이동
          </div>
        </Link>
        <Link to="/youtube_list/youtubeList">
          <div className="btn btn-primary">
            유튜브 리스트로 이동
          </div>
        </Link>
        <Link to="/notice/notice">
          <div className="btn btn-primary">
            공지 사항
          </div>
        </Link>
      </div>
    )
  }
}

export default HeaderCpt;