import api from 'libs/api/common';

const getLocale = (data) => {
  data.locale = localStorage.getItem('language') || navigator.language.split(/[-_]/)[0];

  return data;
};

export default {
  getSearchItem: async (req) => {
    console.log(req);
    req = req.locale ? req : getLocale(req);

    return await api.send('api/enhance/dialog/input/search', req, 'post');
  },

  getSimulateItemByCube: async (req) => {
    console.log(req);
    req = req.locale ? req : getLocale(req);

    return await api.send('api/item/simulate/cube', req, 'post');
  },
};
