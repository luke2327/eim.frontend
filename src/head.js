import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Head extends Component{
  render() {
    return(
      <Helmet htmlAttributes={
        {lang: 'ko'}
      }>
        <meta charSet="utf-8" ></meta>
        <meta property="og:description" content="Everything in Maplestory" />
        <meta property="description" content="Everything in Maplestory" />
        <meta property="author" content="luke2327" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Cache-Control" content="no-cache" />
        <meta http-equiv="Pragma" content="no-cache" />
        <title>Everything in Maplestory</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300:400:500:700" rel="stylesheet"></link>
        <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,Symbol"></script>
      </Helmet>
    )
  }
}

export default Head;