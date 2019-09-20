import { observable, computed } from 'mobx';
import moment from 'moment';

export default class crawlingStore {
  @observable endDate = moment();

  @observable youtubeList;

  @computed get items() {
    return this.youtubeList.create_tmp;
  }
}
