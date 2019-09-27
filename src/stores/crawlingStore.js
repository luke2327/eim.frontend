import { observable } from 'mobx';
import moment from 'moment';

export default class crawlingStore {
  @observable endDate = moment();

  @observable youtubeList;
}
