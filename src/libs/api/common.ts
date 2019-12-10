import axios from 'axios';

export default {
  send: (url: string, req: any, method = 'post') => {
    const defaultUrl = 'http://localhost:6050/';

    url = defaultUrl + url;
    console.log('URL :', url);
    console.log('TYPE:', method);

    return method === 'post'
      ? axios.post(url, req)
      : axios.get(url, req);
  },
};
