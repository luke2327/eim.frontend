import api from './common';

export default {
  getYoutubeList: async (req: any) => {
    return await api.send('api/vod/youtube/list', req);
  },
};
