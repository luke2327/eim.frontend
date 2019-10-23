import { observable, action, toJS } from 'mobx';
import itemApi from '../libs/api/item';
import { AltarItem } from '../models/altarItem.interface';

export default class simulateStore {
  @observable altarItem = null;

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

  @observable equipmentStorage = {
    Equip: {
      Beginner: {},
      Warrior: {},
      Bowman: {},
      Magician: {},
      Thief: {},
      Pirate: {},
    },
  };

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

  @observable isInitializeCube = 0;
  @observable isHidden = this.defaultIsHidden;
  @observable potential;
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

  @observable cubeItemRootAbyss;
  @observable cubeItemAbsolab;
  @observable cubeItemArcaneUmbra;
  @observable availableCubeList = [];

  @action styleCubeAltar = () => {
    if (this.isHidden) {
      this.currentPotentialStyle = 'hidden';
    } else if (this.altarItem) {
      this.currentPotentialStyle = this.potentialLabelList[this.currentPotentialLevel];
    }
  }

  @action loadItemList = async () => {
    if (!this.isInitializeCube) {
      await Promise.all(Object.entries(this.defaultCubeGiven).map(async ([label, req]) => {
        const result = await itemApi.getSimulateItemByCube({ ...req, label });
        if (label === 'rootAbyss') {
          this.cubeItemRootAbyss = result.data;
        } else if (label === 'absolab') {
          this.cubeItemAbsolab = result.data;
        } else if (label === 'arcaneUmbra') {
          this.cubeItemArcaneUmbra = result.data;
        }
      }));

      const req = {
        item_no: this.defaultAvailableCubeList,
      };

      const result = await itemApi.getSimulateAvailableByCube(req);
      this.availableCubeList = result.data;
      this.isInitializeCube = 1;
    }
  }

  @action fillEquipmentStorage = async () => {
    const req = [
      {
        minItemLevel: 150,
        maxItemLevel: 200,
        category: ['Armor'],
      },
      {
        minItemLevel: 150,
        maxItemLevel: 200,
        category: ['OneHandedWeapon', 'TwoHandedWeapon'],
      },
    ];

    const result = await itemApi.getEquipmentItem(req);
    Array.from(result.data).forEach((value) => {
      if (!_.isUndefined(this.equipmentStorage[value.overall_category][value.req_jobs][value.category])) {
        this.equipmentStorage[value.overall_category][value.req_jobs][value.category].push(value);
      } else {
        this.equipmentStorage[value.overall_category][value.req_jobs][value.category] = [];
      }
    });

    console.log(toJS(this.equipmentStorage));
  }

  @action styleWearing = (item, category, overallCategory) => {
    let wearing;

    if (category && overallCategory) {
      wearing = this.wearingEquipment[overallCategory][category];
    } else {
      const c = this.getCategory(item);
      wearing = this.wearingEquipment[c.overallCategory][c.category];
    }

    if (wearing.currentPotentialLevel) {
      wearing.currentPotentialStyle = this.potentialLabelList[wearing.currentPotentialLevel];
    } else {
      wearing.currentPotentialStyle = 'hidden';
    }
  }

  @action generateIcon = (itemId) => {
    return `https://items.maplestory.io/api/kms/323/item/${itemId}/icon`;
  }

  @action getCategory = (item) => {
    const result = {};
    result.overallCategory = item.overall_category.toLowerCase();
    if (_.includes(item.category.toLowerCase(), 'weapon')) {
      result.category = 'weapon';
    }

    return result;
  }

  @action setWearingEquipment = (item) => {
    const c = this.getCategory(item);

    this.currentOverallCategory = c.overallCategory;
    this.currentCategory = c.category;
    this.wearingEquipment[c.overallCategory][c.category] = item;
  }

  @action setPotential = (data, category, overallCategory) => {
    this.currentPotentialLevel = data.potentialLevel;
    this.potential = data.potential;
    if (category && overallCategory) {
      this.wearingEquipment[overallCategory][category].currentPotentialLevel = data.potentialLevel;
      this.wearingEquipment[overallCategory][category].potential = data.potential;
    }
  }

  @action initWearingEquipment = (item) => {

  }

  @action init = () => {
    this.currentPotentialStyle = '';
    this.fillEquipmentStorage();
  }

  @action clearItem = (itemNo, overallCategory, category) => {
    if (this.altarItem.item_no === itemNo) {
      this.altarItem = undefined;
      this.currentPotentialStyle = undefined;
    }

    this.wearingEquipment[overallCategory][category] = {};
  }

  @action clearPotential = () => {
    this.potential = undefined;
    this.currentPotentialStyle = this.defaultPotentialStyle;
    this.currentPotentialLevel = this.defaultPotentialLevel;
  }

  @action selectAltarItem = (item) => {
    this.altarItem = item;
    this.clearPotential();
    this.setWearingEquipment(item);
    this.styleCubeAltar();
    this.styleWearing(item);
  }

  @action transformAltarItem = (data, cubeData) => {
    this.useCubeCount += 1;
    this.isHidden = 0;
    if (cubeData.item_no === 5062009) {
      this.useRedCubeCount += 1;
    } else if (cubeData.item_no === 5062010) {
      this.useBlackCubeCount += 1;
    }
    this.useTotalCount = this.useRedCubeCount * this.defaultRedPrice + this.useBlackCubeCount * this.defaultBlackPrice;
    this.setPotential(data, this.currentCategory, this.currentOverallCategory);
    this.styleWearing(data, this.currentCategory, this.currentOverallCategory);
    this.styleCubeAltar();
  }
}
