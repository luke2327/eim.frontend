import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainView extends Component {
  render() {
    return (
      <div>
        <Link to="/enhance/enhanceEquip">
          <div className="btn">
            강화로 이동
          </div>
        </Link>
        <Link to="/youtube_list/youtubeList">
          <div className="btn">
            유튜브 리스트로 이동
          </div>
        </Link>
      </div>
    );
  }
}

export default MainView;