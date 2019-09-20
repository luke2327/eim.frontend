import { observable, computed } from 'mobx';
import moment from 'moment';

export default class crawlingStore {
  @observable endDate = moment();

  @observable youtubeList;

  // @action setYoutubeList = (data) => {
  //   this.youtubeList = data;
  //   const source = observable(data);
  // };

  @computed get items() {
    return this.youtubeList.create_tmp;
  }
}
