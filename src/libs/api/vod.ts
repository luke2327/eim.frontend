import api from './common';

export default {
  getVodList: async (req: any) => {
    return await api.send('api/vod/youtube/list', req);
  },
};
