import api from 'libs/api/common';

export default {
  getYoutubeList: async () => {
    return await api.send('api/vod/youtube/list');
  },
};
