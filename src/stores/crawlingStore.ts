import { observable } from 'mobx';
import moment from 'moment';
import { VodItem } from '../models/vod/vod.interface';

export default class CrawlingStore {
  @observable endDate = moment();

  @observable vodList: VodItem[] | undefined;
}
