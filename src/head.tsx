import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import CommonStore from './stores/commonStore';

class Head extends Component<{common: CommonStore}> {
  render() {
    const { common } = this.props;
    return (
      <Helmet htmlAttributes={
        { lang: common.statedLanguage || common.defaultLang }
      }
      >
        <meta charSet="utf-8" />
        <meta property="og:description" content="Everything in Maplestory" />
        <meta property="description" content="Everything in Maplestory" />
        <meta property="author" content="luke2327" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <title>Everything in Maplestory</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300:400:500:700" rel="stylesheet" />
        <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,Symbol" />
      </Helmet>
    );
  }
}

export default Head;
