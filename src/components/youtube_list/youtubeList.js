import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import api from 'libs/api/vod';
import YoutubeListCard from './youtubeListCard';

@inject('crawling')
@observer
class YoutubeListCpt extends Component {
  constructor() {
    super();

    this.state = {
      vod: {},
    };
  }

  componentDidMount() {
    api.getYoutubeList({ max: 10 }).then((res) => {
      this.props.crawling.youtubeList = res.data;
    });
  }

  render() {
    const { crawling } = this.props;
    return (
      crawling.youtubeList === undefined
        ? <div>loading</div>
        :
        <div id="youtube-list" className="h100p">
          {toJS(crawling.youtubeList).map((item) => {
            return <YoutubeListCard key={item.vod_no} item={item} />;
          })}
        </div>
    );
  }
}

export default YoutubeListCpt;
