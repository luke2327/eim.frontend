import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import api from 'libs/api/vod';
import VodListCard from './vodListCard';
import CrawlingStore from 'stores/crawlingStore';
import { VodItem } from 'models/vod/vod.interface';

interface Props {
  crawling: CrawlingStore;
}

@inject('crawling')
@inject('common')
@observer
class VodList extends Component<Props> {
  componentDidMount() {
    const req = {
      max: 10,
    };

    api.getVodList(req).then((res) => {
      this.props.crawling.vodList = res.data;
    });
  }

  render() {
    const { crawling } = this.props;

    return (
      crawling.vodList === undefined
        ? <div>loading</div>
        :
        <div id="vod-list" className="h100p fade-in">
          {toJS(crawling.vodList).map((item: VodItem) => {
            return Number(item.del_field) === 0
              ? <VodListCard key={item.vod_no} item={item} />
              : null;
          })}
        </div>
    );
  }
}

export default VodList;
