import { observable } from 'mobx';
import moment from 'moment';
import { VodItem } from '../models/vod.interface';

export default class crawlingStore {
  @observable endDate = moment();

  @observable youtubeList: VodItem[] | undefined;
}
