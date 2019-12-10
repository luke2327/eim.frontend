import api from './common';
import { isArray } from 'util';
import { SEARCH_ITEM } from '../../models/searchItem.type';

interface LocaleType {
  locale: any;
  forEach?: any;
}

const getLocale = (data: { locale: any; forEach?: any; }) => {
  const locale = localStorage.getItem('language') || navigator.language.split(/[-_]/)[0];

  if (isArray(data)) {
    data.forEach((iterData: { locale: string; }) => {
      iterData.locale = locale;
    });
  } else {
    data.locale = locale;
  }

  return data;
};

export default {
  getLuckyChannel: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/enhance/form/lucky/channel', req, 'post');
  },

  getSearchItem: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/enhance/dialog/input/search', req, 'post');
  },

  getSimulateItemByCube: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/item/simulate/item', req, 'post');
  },

  getSimulateAvailableByCube: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/item/simulate/available-cube', req, 'post');
  },

  setPotentialByCube: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/item/simulate/set-potential', req, 'post');
  },

  getEquipmentItem: async (req: any) => {
    req = req.locale ? req : getLocale(req);

    return await api.send('api/item/simulate/equipment-item', req, 'post');
  },
};
