// temp component
import React, { Component } from 'react';
import YoutubeListCpt from 'src/components/youtube_list/youtubeList';

export default class RightSideCPt extends Component {
  render() {
    return (
      <div className="temp-side-cpt center-flex">
        <YoutubeListCpt />
      </div>
    );
  }
}
