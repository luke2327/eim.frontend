import api from 'libs/api/common';

export default {
  getMapleItem: async (req) => {
    return await api.send('api/maple/item', req);
  },

  getMapleItemList: async (req) => {
    return await api.send('api/maple/item/list', req);
  },

  getMapleItemCategory: async (req) => {
    return await api.send('api/maple/item/category', req);
  },

  getMapleItemOverallCategory: async (req) => {
    return await api.send('api/maple/item/category/overall-category', req);
  },

  getMapleItemBulk: async (req) => {
    return await api.send('api/maple/item/bulk', req);
  },

  getMapleItemDetail: async (req) => {
    return await api.send('api/maple/item/detail', req);
  },

  getMapleItemIcon: async (req) => {
    return await api.send('api/maple/item/icon', req);
  },

  getMapleItemIconRaw: async (req) => {
    return await api.send('api/maple/item/icon-raw', req);
  },

  getMapleItemName: async (req) => {
    return await api.send('api/maple/item/name', req);
  },
};
