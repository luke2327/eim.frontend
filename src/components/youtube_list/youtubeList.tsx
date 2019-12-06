import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import api from '../../libs/api/vod';
import YoutubeListCard from './youtubeListCard';
import crawlingStore from '../../stores/crawlingStore';
import { VodItem } from '../../models/vod.interface';

interface Props {
  crawling: crawlingStore,
}

@inject('crawling')
@inject('common')
@observer
class YoutubeListCpt extends Component<Props> {
  componentDidMount() {
    const req: Record<string, number> = {
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
          {toJS(crawling.youtubeList).map((item: VodItem) => {
            return Number(item.del_field) === 0
              ? <YoutubeListCard key={item.vod_no} item={item} />
              : null;
          })}
        </div>
    );
  }
}

export default YoutubeListCpt;
