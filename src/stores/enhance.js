import { observable, action } from 'mobx';

export default class EnhanceStore {
  @observable item = {};

  @action setItem = (data) => {
    this.item = data;
    console.log(this.item);
    console.log(this.item.name);
  }

}