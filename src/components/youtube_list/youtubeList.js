import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import api from 'libs/api/vod';
// const api = require('libs/api/common');

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
    api.getYoutubeList().then((res) => {
      this.props.crawling.youtubeList = res.data;
    });
  }

  render() {
    const { crawling } = this.props;
    return (
      crawling.youtubeList === undefined
        ? <div>loading</div>
        :
        <div>
          {toJS(crawling.youtubeList).map((item, i) => {
            return <p key={i}>{item.create_tmp}</p>;
          })}
        </div>
    );
  }
}

export default YoutubeListCpt;
