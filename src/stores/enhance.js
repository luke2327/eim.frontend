import { observable, action } from 'mobx';

export default class EnhanceStore {
  @observable selectItem;

  @action setSelectItem = (item) => {
    this.selectItem = item;
    console.log(this.selectItem);
  }

}