import api from 'libs/api/common';

const getLocale = (data) => {
  data.locale = localStorage.getItem('language') || navigator.language.split(/[-_]/)[0];

  return data;
};

export default {
  getMapleItem: async (req) => {
    req = req.locale ? req : getLocale(req);

    req.locale = '';

    return await api.send('api/maple/item', req);
  },

  getMapleItemList: async (req) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/list', req);
  },

  getMapleItemCategory: async (req) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/category', req);
  },

  getMapleItemOverallCategory: async (req) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/category/overall-category', req);
  },

  getMapleItemBulk: async (req) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/bulk', req);
  },

  getMapleItemDetail: async (req) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/detail', req);
  },

  getMapleItemIcon: async (req) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/icon', req);
  },

  getMapleItemIconRaw: async (req) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/icon-raw', req);
  },

  getMapleItemName: async (req) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/name', req);
  },
};
