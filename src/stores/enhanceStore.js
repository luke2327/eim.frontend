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
  // 올텟퍼 + 총데미지도 계산
  @action maxAddOptWeaponStat = (level, genStat, itemClass) => {
    switch (level) {
      case 150:
        return genStat * (41 / 100) + (itemClass === 'daemon' ? 0 : (2 * 5)) + (2.4 * 5);
      case 160:
        return genStat * (51 / 100) + (itemClass === 'daemon' ? 0 : (2.55 * 5)) + (2.93 * 5);
      case 200:
        return genStat * (62 / 100) + (itemClass === 'daemon' ? 0 : (3.31 * 5)) + (4.92 * 5);
      default:
        return 0;
    }
  }

  @action calAddOptWeaponStat = (level, statName) => {
    switch (level) {
      case 150:
        return statName === 'allstat' ? 2 : 2.4;
      case 160:
        return statName === 'allstat' ? 2.55 : 2.93;
      case 200:
        return statName === 'allstat' ? 3.31 : 4.92;
      default:
        return 0;
    }
  }

  /* 추옵단계평가함수 */
  @action evaluateAddOptItem = () => {
    const maxWeaponStat = this.maxAddOptWeaponStat(this.item.level, this.itemClass === 'wizard' ? this.item.mg_atk : this.item.atk, this.itemClass);
    const maxEquipStat = this.maxAddOptEquipStat(this.item.level, this.itemClass);

    let stat = 0;

    this.mainStatProperty.forEach((o) => {
      if (this.item.cate === 'weapon') {
        stat += (o.name === 'allstat' && o.status) ? this.calAddOptWeaponStat(this.item.level, 'allstat') * this.addOptStat.allstat : 0;
        stat += (o.name === 'damage' && o.status) ? this.calAddOptWeaponStat(this.item.level, 'damage') * this.addOptStat.damage : 0;
        stat += (o.name === 'atk' && o.status) ? this.addOptStat.atk : 0;
        stat += (o.name === 'mg_atk' && o.status) ? this.addOptStat.mg_atk : 0;
      } else {
        stat += ((o.name === 'str' ||
                  o.name === 'dex' ||
                  o.name === 'int' ||
                  o.name === 'luk' ||
                  o.name === 'hp') &&
                  o.status) ? this.addOptStat[o.name] : 0;
        stat += (o.name === 'allstat' && o.status) ? this.addOptStat.allstat * 10 : 0;
      }
    });

    return this.item.cate === 'weapon' ? ((stat / maxWeaponStat) * 100) : ((stat / maxEquipStat) * 100);
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

    this.mainStatProperty.map((o) => {
      o.status = false;

      switch (this.itemClass) {
        case 'pirate':
        case 'warrior':
          o.status = (o.name === 'atk' || o.name === 'str' || o.name === 'allstat' || o.name === 'boss_atk' || o.name === 'damage');
          break;
        case 'thief':
          o.status = (o.name === 'atk' || o.name === 'luk' || o.name === 'allstat' || o.name === 'boss_atk' || o.name === 'damage');
          break;
        case 'wizard':
          o.status = (o.name === 'mg_atk' || o.name === 'int' || o.name === 'allstat' || o.name === 'boss_atk' || o.name === 'damage');
          break;
        case 'archer':
          o.status = (o.name === 'atk' || o.name === 'dex' || o.name === 'allstat' || o.name === 'boss_atk' || o.name === 'damage');
          break;
        case 'daemon':
          o.status = (o.name === 'atk' || o.name === 'hp' || o.name === 'boss_atk' || o.name === 'damage');
          break;
        case 'jaenon':
          o.status = (o.name === 'atk' || o.name === 'luk' || o.name === 'dex' || o.name === 'allstat' || o.name === 'boss_atk' || o.name === 'damage');
          break;
        default:
          break;
      }

      return o;
    });
  }
  @action setItemSf = (value) => {
    this.itemSf = value;
  }
  @action setItem = (data) => {
    this.item = data;
  }
}
