import { observable, action } from 'mobx';

export default class EnhanceStore {
  @observable item = {};
  @observable generalEnhanceStat = {
    
  }
  @observable weapon = {
    '150': [
      { stat: 0, atk: 0, mg_atk: 0 }
    ]
  }

  @action setItem = (data) => {
    this.item = data;
    console.log(this.item);
    console.log(this.item.name);
  }

  @action setStarforceItem = ( cate, data, sf ) => {
    if ( cate === 'weapon' ) {
      
    }
  }

}