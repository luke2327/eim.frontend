import { observable, action } from 'mobx';
import sfEquip from 'assets/starforceEquip';


export default class EnhanceStore {
  @observable item = {
    item_no: 0,
    cate: '',
    name: '',
    item_cate: '',
    level: 0,
    mg_atk: 0,
    atk: 0,
    def: 0,
    str: 0,
    dex: 0,
    luk: 0,
    int: 0,
    hp: 0,
    mp: 0,
    atk_speed: '',
    move_speed: 0,
    jump_power: 0,
    boss_atk: 0,
    monster_def: 0,
    upgrade: 0,
    starforce: '',
  };
  @observable itemSf = 0;
  @observable itemClass = '';
  @observable enhanceStat = {
    mg_atk: 0,
    atk: 0,
    str: 0,
    dex: 0,
    luk: 0,
    int: 0,
    hp: 0,
    mp: 0,
  };
  @observable sfStat = {
    mg_atk: 0,
    atk: 0,
    str: 0,
    dex: 0,
    luk: 0,
    int: 0,
    hp: 0,
    mp: 0,
  };
  @observable addOptStat = {
    mg_atk: 0,
    atk: 0,
    str: 0,
    dex: 0,
    luk: 0,
    int: 0,
    hp: 0,
    mp: 0,
    boss_atk: 0,
    damage: 0,
    allstat: 0,
    chackgam: 0,
  };
  @observable mainStatProperty = [
    { name: 'mg_atk', status: false, type: 'weapon' },
    { name: 'atk', status: false, type: 'weapon' },
    { name: 'str', status: false, type: 'equip' },
    { name: 'dex', status: false, type: 'equip' },
    { name: 'luk', status: false, type: 'equip' },
    { name: 'int', status: false, type: 'equip' },
    { name: 'hp', status: false, type: 'equip' },
    { name: 'mp', status: false, type: 'equip' },
    { name: 'boss_atk', status: false, type: 'weapon' },
    { name: 'damage', status: false, type: 'weapon' },
    { name: 'allstat', status: false, type: 'equip' },
    { name: 'chackgam', status: false, type: '' },
  ];

  @action maxAddOptEquipStat = (level, itemClass) => {
    switch (level) {
      case 150:
        return itemClass === 'daemon' ? 3150 : 182;
      case 160:
        return itemClass === 'daemon' ? 3360 : 238;
      case 200:
        return itemClass === 'daemon' ? 4200 : 273;
      default:
        return 0;
    }
  }
  @action maxAddOptWeaponStat = (level, genStat) => {
    switch (level) {
      case 150:
        return genStat * (41 / 100) + (2 * 5) + (2.4 * 5);
      case 160:
        return genStat * (51 / 100) + (2.55 * 5) + (2.93 * 5);
      case 200:
        return genStat * (62 / 100) + (3.31 * 5) + (4.92 * 5);
      default:
        return 0;
    }
  }

  @action handleChangeEnhanceStat = (name, stat) => {
    this.enhanceStat[name] = stat;
  }
  @action handleChangeAddOptStat = (name, stat) => {
    this.addOptStat[name] = stat;
  }
  @action handleChangeSfStat = () => {
    this.sfStat = {
      mg_atk: 0,
      atk: 0,
      str: 0,
      dex: 0,
      luk: 0,
      int: 0,
      hp: 0,
      mp: 0,
    };

    if (this.item.item_cate === '장갑') {
      for (let i = 0; i < this.itemSf; i += 1) {
        this.sfStat.mg_atk += sfEquip.glove[this.item.level][i].atkAll;
        this.sfStat.atk += sfEquip.glove[this.item.level][i].atkAll;
        this.sfStat.str += sfEquip.glove[this.item.level][i].stat;
        this.sfStat.dex += sfEquip.glove[this.item.level][i].stat;
        this.sfStat.luk += sfEquip.glove[this.item.level][i].stat;
        this.sfStat.int += sfEquip.glove[this.item.level][i].stat;
      }
    } else {
      if (this.item.cate === 'weapon') {
        for (let i = 0; i < (this.itemSf && 15); i += 1) {
          this.sfStat.atk += parseInt((this.item.atk + this.sfStat.atk + this.enhanceStat.atk) / 50 + 1, 10);
          this.sfStat.mg_atk += parseInt((this.item.mg_atk + this.sfStat.mg_atk + this.enhanceStat.mg_atk) / 50 + 1, 10);
        }
      }

      for (let i = 0; i <= this.itemSf; i += 1) {
        this.sfStat.mg_atk += sfEquip[this.item.cate][this.item.level][i].atkAll;
        this.sfStat.atk += sfEquip[this.item.cate][this.item.level][i].atkAll;
        this.sfStat.str += sfEquip[this.item.cate][this.item.level][i].stat;
        this.sfStat.dex += sfEquip[this.item.cate][this.item.level][i].stat;
        this.sfStat.luk += sfEquip[this.item.cate][this.item.level][i].stat;
        this.sfStat.int += sfEquip[this.item.cate][this.item.level][i].stat;
      }
    }
  }


  @action setClassStatFont = (statName, itemClass) => {
    if (itemClass === 'pirate' || itemClass === 'warrior') {
      switch (statName) {
        case 'atk':
        case 'str':
        case 'allstat':
        case 'boss_atk':
        case 'damage':
          return 'red';
        default:
          return 'black';
      }
    } else if (itemClass === 'thief') {
      switch (statName) {
        case 'atk':
        case 'luk':
        case 'allstat':
        case 'boss_atk':
        case 'damage':
          return 'red';
        default:
          return 'black';
      }
    } else if (itemClass === 'wizard') {
      switch (statName) {
        case 'mg_atk':
        case 'int':
        case 'allstat':
        case 'boss_atk':
        case 'damage':
          return 'red';
        default:
          return 'black';
      }
    } else if (itemClass === 'archer') {
      switch (statName) {
        case 'atk':
        case 'dex':
        case 'allstat':
        case 'boss_atk':
        case 'damage':
          return 'red';
        default:
          return 'black';
      }
    } else if (itemClass === 'daemon') {
      switch (statName) {
        case 'atk':
        case 'hp':
        case 'boss_atk':
        case 'damage':
          return 'red';
        default:
          return 'black';
      }
    } else if (itemClass === 'jaenon') {
      switch (statName) {
        case 'atk':
        case 'luk':
        case 'dex':
        case 'allstat':
        case 'boss_atk':
        case 'damage':
          return 'red';
        default:
          return 'black';
      }
    } else {
      return 'black';
    }
  }

  @action setItemClass = (value) => {
    this.itemClass = value;
  }
  @action setItemSf = (value) => {
    this.itemSf = value;
  }
  @action setItem = (data) => {
    this.item = data;
  }
}
