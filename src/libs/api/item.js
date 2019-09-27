import api from 'libs/api/common';

const getLocale = (data) => {
  data.locale = localStorage.getItem('language') || navigator.language.split(/[-_]/)[0];

  return data;
};

export default {
  getSearchItem: async (req) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/enhance/dialog/input/search', req, 'post');
  },

  getSimulateItemByCube: async (req) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/item/simulate/item', req, 'post');
  },

  getSimulateAvailableByCube: async (req) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/item/simulate/available-cube', req, 'post');
  },

  setPotentialByCube: async (req) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/item/simulate/set-potential', req, 'post');
  },
};
