import axios from 'axios';

export default {
  getMapleItem: async (req) => {
    const defaultUrl = 'http://localhost:6050/';
    return await axios.post(`${defaultUrl}api/maple/item`, req);
  },
};
