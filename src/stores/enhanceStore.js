import { observable, action } from 'mobx';
import sfEquip from 'assets/starforceEquip';
import sfCost from 'assets/starforceCost';


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
    starforce: 0,
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
  @observable evaluateData = [
    { subject: '추옵단계', A: 0, B: 100, fullMark: 100 },
    { subject: '일반강화', A: 0, B: 100, fullMark: 100 },
    { subject: '시장가치', A: 0, B: 100, fullMark: 100 },
    { subject: '스타포스', A: 0, B: 100, fullMark: 100 },
    { subject: '총메인스탯', A: 0, B: 100, fullMark: 100 },
  ];
  @observable sfCostInfo = [
    { name: '0성', cost: 0, expectCost: 0 },
    { name: '1성', cost: 0, expectCost: 0 },
    { name: '2성', cost: 0, expectCost: 0 },
    { name: '3성', cost: 0, expectCost: 0 },
    { name: '4성', cost: 0, expectCost: 0 },
    { name: '5성', cost: 0, expectCost: 0 },
    { name: '6성', cost: 0, expectCost: 0 },
    { name: '7성', cost: 0, expectCost: 0 },
    { name: '8성', cost: 0, expectCost: 0 },
    { name: '9성', cost: 0, expectCost: 0 },
    { name: '10성', cost: 0, expectCost: 0 },
    { name: '11성', cost: 0, expectCost: 0 },
    { name: '12성', cost: 0, expectCost: 0 },
    { name: '13성', cost: 0, expectCost: 0 },
    { name: '14성', cost: 0, expectCost: 0 },
    { name: '15성', cost: 0, expectCost: 0 },
    { name: '16성', cost: 0, expectCost: 0 },
    { name: '17성', cost: 0, expectCost: 0 },
    { name: '18성', cost: 0, expectCost: 0 },
    { name: '19성', cost: 0, expectCost: 0 },
    { name: '20성', cost: 0, expectCost: 0 },
    { name: '21성', cost: 0, expectCost: 0 },
    { name: '22성', cost: 0, expectCost: 0 },
  ];
  @observable cashGrade = 'bronze';

  @action setSfCostInfo = () => {
    this.sfCostInfo = this.sfCostInfo.map((o, index) => {
      const data = sfCost[this.item.level][this.cashGrade][index];
      return { name: o.name, cost: data.cost, expectCost: data.expectCost };
    });
  }

  @action setInputMaxEnhanceStat = (statName) => {
    switch (statName) {
      case 'mg_atk':
        return 99;
      case 'atk':
        return 99;
      case 'str':
      case 'dex':
      case 'int':
      case 'luk':
        return (this.item.upgrade + 1) * 9;
      case 'hp':
        return (this.item.upgrade + 1) * 470;
      default:
        return 0;
    }
  }

  @action setInputMaxAddOptStat = (statName) => {
    switch (statName) {
      case 'mg_atk':
        return this.maxAddOptWeaponStat(this.item.level, this.item.mg_atk);
      case 'atk':
        return this.maxAddOptWeaponStat(this.item.level, this.item.atk);
      case 'hp':
        return this.maxAddOptEquipStat(this.item.level, 'daemon');
      case 'str':
      case 'luk':
      case 'int':
      case 'dex':
        return this.maxAddOptEquipStat(this.item.level, 'stat') - 70;
      case 'allstat':
        return this.item.cate === 'weapon' ? 6 : 7;
      case 'damage':
        return this.item.cate === 'weapon' ? 5 : 0;
      case 'boss_atk':
        return this.item.cate === 'weapon' ? 14 : 0;
      default:
        return 0;
    }
  }

  @action maxEnhanceStat = () => {
    if (this.item.cate === 'weapon') {
      return 99;
    }

    return this.itemClass === 'daemon' ? (this.item.upgrade + 1) * 470 : (this.item.upgrade + 1) * 9;
  }

  @action maxAddOptEquipStat = (level, itemClass) => {
    switch (level) {
      case 100:
        return itemClass === 'daemon' ? 2100 : (84 + 70);
      case 110:
        return itemClass === 'daemon' ? 2310 : (84 + 70);
      case 120:
        return itemClass === 'daemon' ? 2520 : (105 + 70);
      case 130:
        return itemClass === 'daemon' ? 2730 : (105 + 70);
      case 135:
        return itemClass === 'daemon' ? 2935 : (105 + 70);
      case 140:
        return itemClass === 'daemon' ? 2940 : (112 + 70);
      case 150:
        return itemClass === 'daemon' ? 3150 : (112 + 70);
      case 160:
        return itemClass === 'daemon' ? 3360 : (168 + 70);
      case 200:
        return itemClass === 'daemon' ? 4200 : (203 + 70);
      default:
        return 0;
    }
  }

  @action maxAddOptWeaponStat = (level, genStat) => {
    switch (level) {
      case 150:
        return genStat * (41 / 100);
      case 160:
        return genStat * (51 / 100);
      case 200:
        return genStat * (62 / 100);
      default:
        return 0;
    }
  }

  // 올텟퍼 + 총데미지도 계산
  @action maxAddOptWeaponStat = (level, genStat, itemClass) => {
    switch (level) {
      case 150:
        return genStat * (41 / 100) + (itemClass === 'daemon' ? 0 : (2 * 6)) + (2.4 * 5);
      case 160:
        return genStat * (51 / 100) + (itemClass === 'daemon' ? 0 : (2.55 * 6)) + (2.93 * 5);
      case 200:
        return genStat * (62 / 100) + (itemClass === 'daemon' ? 0 : (3.31 * 6)) + (4.92 * 5);
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

  /* 총메인스탯평가함수 */
  @action evaluateMainStatItem = () => {
    let maxStat = 0;
    let currentStat = 0;

    if (this.item.cate === 'equip') {
      maxStat = this.itemClass === 'daemon' ? 8000 : 420;

      this.mainStatProperty.forEach((o) => {
        currentStat += ((o.name === 'str' ||
                        o.name === 'dex' ||
                        o.name === 'int' ||
                        o.name === 'luk' ||
                        o.name === 'hp') &&
                        o.status) ? (this.addOptStat[o.name] + this.item[o.name] + this.sfStat[o.name] + this.enhanceStat[o.name]) : 0;
        currentStat += (o.name === 'allstat' && o.status) ? this.addOptStat.allstat * 10 : 0;
      });

      return ((currentStat / maxStat) * 100);
    }

    const sfMaxStat = this.setSfStat(22, 99, 99);
    maxStat = 99 +
              (this.itemClass === 'wizard' ? sfMaxStat.mg_atk : sfMaxStat.atk) +
              (this.itemClass === 'wizard' ? this.item.mg_atk : this.item.atk) +
              this.maxAddOptWeaponStat(this.item.level, this.itemClass === 'wizard' ? this.item.mg_atk : this.item.atk, this.itemClass);

    currentStat = this.itemClass === 'wizard' ? (this.item.mg_atk + this.addOptStat.mg_atk + this.sfStat.mg_atk + this.enhanceStat.mg_atk) : (this.item.atk + this.addOptStat.atk + this.sfStat.atk + this.enhanceStat.atk);

    return ((currentStat / maxStat) * 100);
  }

  /* 주문서강화수치평가함수 */
  @action evaluateEnhanceStatItem = () => {
    const maxStat = this.maxEnhanceStat();

    if (this.item.cate === 'equip') {
      let currentStat = 0;

      this.mainStatProperty.forEach((o) => {
        currentStat += ((o.name === 'str' ||
                        o.name === 'dex' ||
                        o.name === 'int' ||
                        o.name === 'luk' ||
                        o.name === 'hp') &&
                        o.status) ? this.enhanceStat[o.name] : 0;
      });
      return (currentStat / maxStat) * 100;
    }

    return ((this.itemClass === 'wizard' ? this.enhanceStat.mg_atk : this.enhanceStat.atk) / maxStat) * 100; // 무기인경우
  }

  /* 스타포스평가함수 */
  @action evaluateSfItem = () => {
    return (this.itemSf / this.item.starforce) * 100;
  }

  @action evaluateSellItem = () => {
    return ((this.evaluateAddOptItem() + this.evaluateEnhanceStatItem() + this.evaluateMainStatItem() + this.evaluateSfItem()) / 400) * 100;
  }

  @action evaluateItem = () => {
    this.evaluateData = [
      { subject: '추옵단계', A: this.evaluateAddOptItem(), B: 100, fullMark: 100 },
      { subject: '일반강화', A: this.evaluateEnhanceStatItem(), B: 100, fullMark: 100 },
      { subject: '시장가치', A: this.evaluateSellItem(), B: 100, fullMark: 100 },
      { subject: '스타포스', A: this.evaluateSfItem(), B: 100, fullMark: 100 },
      { subject: '총메인스탯', A: this.evaluateMainStatItem(), B: 100, fullMark: 100 },
    ];
  }

  @action handleChangeEnhanceStat = (name, stat) => {
    this.enhanceStat[name] = stat;
  }
  @action handleChangeAddOptStat = (name, stat) => {
    this.addOptStat[name] = stat;
  }
  @action handleChangeSfStat = () => {
    this.sfStat = this.setSfStat(this.itemSf, this.enhanceStat.atk, this.enhanceStat.mg_atk);
  }

  @action setSfStat = (itemSf, enhanceAtk, enhanceMgAtk) => {
    const result = {
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
      for (let i = 1; i <= itemSf; i += 1) {
        result.mg_atk += sfEquip.glove[this.item.level][i].atkAll;
        result.atk += sfEquip.glove[this.item.level][i].atkAll;
        result.str += sfEquip.glove[this.item.level][i].stat;
        result.dex += sfEquip.glove[this.item.level][i].stat;
        result.luk += sfEquip.glove[this.item.level][i].stat;
        result.int += sfEquip.glove[this.item.level][i].stat;
      }
    } else {
      if (this.item.cate === 'weapon') {
        for (let i = 1; i <= (itemSf > 15 ? 15 : itemSf); i += 1) {
          result.atk += parseInt((this.item.atk + result.atk + enhanceAtk) / 50 + 1, 10);
          result.mg_atk += parseInt((this.item.mg_atk + result.mg_atk + enhanceMgAtk) / 50 + 1, 10);
        }
      }

      for (let i = 1; i <= itemSf; i += 1) {
        result.mg_atk += sfEquip[this.item.cate][this.item.level][i].atkAll;
        result.atk += sfEquip[this.item.cate][this.item.level][i].atkAll;
        result.str += sfEquip[this.item.cate][this.item.level][i].stat;
        result.dex += sfEquip[this.item.cate][this.item.level][i].stat;
        result.luk += sfEquip[this.item.cate][this.item.level][i].stat;
        result.int += sfEquip[this.item.cate][this.item.level][i].stat;
      }
    }

    return result;
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
  @action checkEnhanceStat = () => {
    const val = Object.keys(this.enhanceStat).map((o) => { return this.enhanceStat[o]; });
    for (let i = 0; i < val.length; i += 1) {
      if (val[i] !== 0) {
        return true;
      }
    }
    return false;
  }
  @action initReset = () => {
    this.evaluateData = [
      { subject: '추옵단계', A: 0, B: 100, fullMark: 100 },
      { subject: '일반강화', A: 0, B: 100, fullMark: 100 },
      { subject: '시장가치', A: 0, B: 100, fullMark: 100 },
      { subject: '스타포스', A: 0, B: 100, fullMark: 100 },
      { subject: '총메인스탯', A: 0, B: 100, fullMark: 100 },
    ];
    this.sfCostInfo = [
      { name: '0성', cost: 0, expectCost: 0 },
      { name: '1성', cost: 0, expectCost: 0 },
      { name: '2성', cost: 0, expectCost: 0 },
      { name: '3성', cost: 0, expectCost: 0 },
      { name: '4성', cost: 0, expectCost: 0 },
      { name: '5성', cost: 0, expectCost: 0 },
      { name: '6성', cost: 0, expectCost: 0 },
      { name: '7성', cost: 0, expectCost: 0 },
      { name: '8성', cost: 0, expectCost: 0 },
      { name: '9성', cost: 0, expectCost: 0 },
      { name: '10성', cost: 0, expectCost: 0 },
      { name: '11성', cost: 0, expectCost: 0 },
      { name: '12성', cost: 0, expectCost: 0 },
      { name: '13성', cost: 0, expectCost: 0 },
      { name: '14성', cost: 0, expectCost: 0 },
      { name: '15성', cost: 0, expectCost: 0 },
      { name: '16성', cost: 0, expectCost: 0 },
      { name: '17성', cost: 0, expectCost: 0 },
      { name: '18성', cost: 0, expectCost: 0 },
      { name: '19성', cost: 0, expectCost: 0 },
      { name: '20성', cost: 0, expectCost: 0 },
      { name: '21성', cost: 0, expectCost: 0 },
      { name: '22성', cost: 0, expectCost: 0 },
    ];
    Object.keys(this.enhanceStat).map((o) => {
      this.enhanceStat[o] = 0;
      return this.enhanceStat[o];
    });
    Object.keys(this.sfStat).map((o) => {
      this.sfStat[o] = 0;
      return this.sfStat[o];
    });
    Object.keys(this.addOptStat).map((o) => {
      this.addOptStat[o] = 0;
      return this.addOptStat[o];
    });
    this.mainStatProperty.map((o) => {
      o.status = true;
      return o;
    });
    this.itemSf = 0;
    this.itemClass = '';
  }

  @action comma = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
