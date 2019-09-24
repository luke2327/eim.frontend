// import axios from 'axios';
import api from 'libs/api/common';

export default {
  getMapleItem: async (req) => {
    return await api.send('api/maple/item', req);
  },
};
