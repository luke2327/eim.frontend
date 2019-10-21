import api from './common';

const getLocale = (data: any) => {
  data.locale = localStorage.getItem('language') || navigator.language.split(/[-_]/)[0];

  return data;
};

export default {
  getMapleItem: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item', req);
  },

  getMapleItemList: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/list', req);
  },

  getMapleItemCategory: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/category', req);
  },

  getMapleItemOverallCategory: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/category/overall-category', req);
  },

  getMapleItemBulk: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/bulk', req);
  },

  getMapleItemDetail: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/detail', req);
  },

  getMapleItemIcon: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/icon', req);
  },

  getMapleItemIconRaw: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/icon-raw', req);
  },

  getMapleItemName: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/item/name', req);
  },

  inputMapleItem: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/input/item', req);
  },

  inputMapleItemMeta: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/maple/input/item-meta', req);
  },
};
