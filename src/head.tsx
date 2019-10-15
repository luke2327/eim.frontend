import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { observer, inject } from 'mobx-react';

@inject('common')
@observer
class Head extends Component {
  render() {
    const { common } = this.props;
    return (
      <Helmet htmlAttributes={
        { lang: common.selectedLang || common.defaultLang }
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
        {/* <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous" /> */}
      </Helmet>
    );
  }
}

export default Head;
