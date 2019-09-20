import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import api from 'libs/api/common';
// const api = require('libs/api/common');

@inject('crawling')
@observer
class YoutubeListCpt extends Component {
  componentDidMount() {
    this.getYoutubeList('api/vod/youtube/list');
  }

  getYoutubeList = async (url) => {
    api.send(url)
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <div>
        works
      </div>
    );
  }
}

export default YoutubeListCpt;
