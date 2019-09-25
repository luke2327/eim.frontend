import axios from 'axios';

export default {
  send: (url, req, type = 'post') => {
    const defaultUrl = 'http://localhost:6050/';
    url = defaultUrl + url;
    console.log('URL :', url);
    console.log('TYPE:', type);

    return type === 'post'
      ? axios.post(url, req)
      : axios.get(url, req);
  },
};
