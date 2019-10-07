import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import api from 'libs/api/vod';
import YoutubeListCard from './youtubeListCard';

@inject('crawling')
@inject('common')
@observer
class YoutubeListCpt extends Component {
  constructor() {
    super();

    this.state = {
      vod: {},
    };
  }

  componentDidMount() {
    const req = {
      max: 10,
    };

    api.getYoutubeList(req).then((res) => {
      this.props.crawling.youtubeList = res.data;
    });
  }

  render() {
    const { crawling } = this.props;
    return (
      crawling.youtubeList === undefined
        ? <div>loading</div>
        :
        <div id="youtube-list" className="h100p fade-in">
          {toJS(crawling.youtubeList).map((item) => {
            return !item.del_field
              ? <YoutubeListCard key={item.vod_no} item={item} />
              : null;
          })}
        </div>
    );
  }
}

export default YoutubeListCpt;
