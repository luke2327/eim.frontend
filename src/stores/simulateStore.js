import { observable, action, toJS } from 'mobx';
import _ from 'lodash';

export default class simulateStore {
  @observable defaultIsHidden = 1;
  @observable defaultPotentialLevel = 0;
  @observable defaultPotentialStyle = 'main-cube-zone';
  @observable defaultRedPrice = 1200;
  @observable defaultBlackPrice = 2000;
  @observable defaultAdditionalPrice = 2400;

  @observable useTotalCount = 0;
  @observable useCubeCount = 0;
  @observable useRedCubeCount = 0;
  @observable useBlackCubeCount = 0;
  @observable useAdditionalCubeCOunt = 0;

  @observable specifiedPotentialLevel = 1 || this.defaultPotentialLevel;
  @observable potentialLabelList = {
    0: 'hidden',
    1: 'rare',
    2: 'epic',
    3: 'unique',
    4: 'regendary',
  }

  @observable defaultCubeGiven = {
    rootAbyss: {
      minItemLevel: 150,
      maxItemLevel: 150,
      category: 'equip',
    },
    absolab: {
      minItemLevel: 160,
      maxItemLevel: 160,
      category: 'equip',
    },
    arcaneUmbra: {
      minItemLevel: 200,
      maxItemLevel: 200,
      category: 'equip',
    },
  }

  @observable wearingEquipment = {
    equip: {
      accessory: {
        badge: {},
        belt: {},
        emblem: {},
        faceAccessory: {},
        medal: {},
        eyeDecoration: {},
        earring: {},
        ring: {},
        pendant: {},
        pocketItem: {},
        powerSource: {},
        shoulderAccessory: {},
        totem: {},
      },
      armor: {
        hat: {},
        cape: {},
        top: {},
        glove: {},
        overall: {},
        bottom: {},
        shield: {},
        shoes: {},
      },
      weapon: {},
      other: {
        android: {},
        dragonEquipment: {},
        mechanicalHeart: {},
        mechanicEquipment: {},
        petEquipment: {},
        bits: {},
        shovel: {},
        pickaxe: {},
        petUse: {},
      },
    },
  }

  @observable isInitializeCube = 0;
  @observable isHidden = this.defaultIsHidden;
  @observable currentPotentialLevel = this.defaultPotentialLevel;
  @observable currentPotentialStyle = this.defaultPotentialStyle;
  @observable currentPotential1;
  @observable currentPotential2;
  @observable currentPotential3;
  @observable pastPotential1;
  @observable pastPotential2;
  @observable pastPotential3;
  @observable currentOverallCategory;
  @observable currentCategory;

  @action styleCubeAltar = () => {
    if (this.isHidden) {
      this.currentPotentialStyle = 'hidden';
    } else if (this.altarItem) {
      this.currentPotentialStyle = this.potentialLabelList[this.currentPotentialLevel];
    }
  }

  @observable defaultAvailableCube = [
    {
      cubeName: '레드 큐브',
      overallCategory: 'Cash',
      category: 'Equipment Modification',
      subCategory: 'Miracle Cube',
    },
    {
      cubeName: '블랙 큐브',
      overallCategory: 'Cash',
      category: 'Equipment Modification',
      subCategory: 'Miracle Cube',
    },
    {
      cubeName: '에디셔널 큐브',
      overallCategory: 'Cash',
      category: 'Equipment Modification',
      subCategory: 'Miracle Cube',
    },
  ]
  @observable defaultAvailableCubeList = '5062009, 5062010, 5062500';

  @observable cubeItemRootAbyss;
  @observable cubeItemAbsolab;
  @observable cubeItemAracneUmbra;
  @observable availableCubeList = [];

  @action generateIcon = (itemId) => {
    return `https://items.maplestory.io/api/kms/323/item/${itemId}/icon`;
  }

  @action setWearingEquipment = (item) => {
    const overallCategory = item.overall_category.toLowerCase();
    // const category = item.category.replace(/^./, (str) => str.toLowerCase()).replace(/\s/, '').replace(/-/, '');
    let category;
    if (_.includes(item.category.toLowerCase), 'weapon') {
      category = 'weapon';
    }
    console.log(item);

    this.currentOverallCategory = overallCategory;
    this.currentCategory = category;
    this.wearingEquipment[overallCategory][category] = item;
  }

  @action initWearingEquipment = (item) => {

  }
  @action init = () => {
    this.currentPotentialStyle = '';
  }

  @observable altarItem;

  @action selectAltarItem = (item) => {
    this.altarItem = item;
    this.setWearingEquipment(item);
    this.styleCubeAltar();
  }

  @action transformAltarItem = (data, cubeData) => {
    this.useCubeCount += 1;
    this.isHidden = 0;
    this.currentPotentialLevel = data.potentialLevel;
    if (cubeData.item_no === 5062009) {
      this.useRedCubeCount += 1;
      this.potential = data.potential;
      this.currentPotential1 = data.potential['0'];
      this.currentPotential2 = data.potential['1'];
      this.currentPotential3 = data.potential['2'];
    } else if (cubeData.item_no === 5062010) {
      this.useBlackCubeCount += 1;
      this.currentPotential1 = data.potential['0'];
      this.currentPotential2 = data.potential['1'];
      this.currentPotential3 = data.potential['2'];
    }
    this.useTotalCount = this.useRedCubeCount * this.defaultRedPrice + this.useBlackCubeCount * this.defaultBlackPrice;
    this.styleCubeAltar();
  }
}
