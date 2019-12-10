import React, { Component } from 'react';
import { VodItem } from '../../models/vod.interface';

interface Props {
  item: VodItem;
}

export default class YoutubeListCardCpt extends Component<Props> {
  render() {
    const { item } = this.props;

    return (
      <div id="youtube-card">
        <div className="card-container">
          <div className="between-flex">
            <span className="yc-auth">{item.auth}</span>
            <span className="yc-create-tmp">{item.create_tmp}</span>
          </div>
          <a href={item.link} rel="noopener noreferrer" target="_blank">
            <div className="card-cover" style={{ background: `url(${item.image_link})` }}>
              <div className="yc-content-area w100p h100p cursor-pointer end-flex-vertical">
                <span className="font-bw">{item.title}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
