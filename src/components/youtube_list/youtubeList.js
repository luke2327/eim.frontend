import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import api from 'libs/api/vod';
// import mapleApi from 'libs/api/maple';
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
    let req = {
      max: 10,
    };

    api.getYoutubeList(req).then((res) => {
      this.props.crawling.youtubeList = res.data;
    });

    req = {
      minLevelFilter: 160,
      maxLevelFilter: 170,
      startPosition: 0,
      locale: this.props.common.selectedLang,
    };

    // console.log(req);

    // maplestory.io API 테스트
    // mapleApi.getMapleItem(req).then((res) => {
    //   console.log(res);
    // });

    req = {
      overallCategoryFilter: 'equip',
      categoryFilter: 'Two-Handed Weapon',
      minLevelFilter: 200,
      maxLevelFilter: 200,
      locale: 'ko',
    };

    req = {
      subCategoryFilter: 'Miracle Cube',
      locale: 'ko',
    };

    console.log(req);

    // mapleApi.inputMapleItem(req).then((res) => {
    //   console.log(res);
    // });
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
