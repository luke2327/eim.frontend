import api from 'libs/api/common';

export default {
  getYoutubeList: async (req) => {
    return await api.send('api/vod/youtube/list', req);
  },
};
