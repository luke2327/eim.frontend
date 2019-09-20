import { observable, action } from 'mobx';

export default class EnhanceStore {
  @observable item = {};
  @observable enhanceStat = {
    mg_atk: 0,
    atk: 0,
    str: 0,
    dex: 0,
    luk: 0,
    int: 0,
    hp: 0,
    mp: 0,
  }

  @action handleChangeEnhanceStat = (name, stat) => {
    this.enhanceStat[name] = stat;
    console.log(this.enhanceStat);
  }

  @action setItem = (data) => {
    this.item = data;
    console.log(this.item);
    console.log(this.item.name);
  }
}
