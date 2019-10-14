import api from 'libs/api/common';

const getLocale = (data) => {
  const locale = localStorage.getItem('language') || navigator.language.split(/[-_]/)[0];

  if (_.isArray(data)) {
    _.forEach(data, (iterData) => {
      iterData.locale = locale;
    });
  } else {
    data.locale = locale;
  }

  return data;
};

export default {
  getLuckyChannel: async (req) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/enhance/form/lucky/channel', req, 'post');
  },

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

  getEquipmentItem: async (req) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/item/simulate/equipment-item', req, 'post');
  },
};
