import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('crawling')
@observer
class YoutubeListCpt extends Component {
  render() {
    return (
      <div>
        works
      </div>
    );
  }
}

export default YoutubeListCpt;
