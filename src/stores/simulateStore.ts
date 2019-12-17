import { observable, action, toJS } from 'mobx';
import itemApi from '../libs/api/item';
import { AltarItem } from '../models/altarItem.interface';
import { CUBE_POTENTIAL_LEVEL } from '../models/simulate/cubePotentialLevel.type';
import { MAJOR_EQUIP_SET_LINE } from '../models/simulate/majorEquipSetLine.type';
import { CallEquipSetLineReq } from '../models/simulate/callEquipSetLineReq.interface';

const defaultPotentialLevel = 0;
const defaultIsHidden = 1;
const defaultPotentialStyle = 'main-cube-zone';
const defaultRedPrice = 1200;
const defaultBlackPrice = 2000;
const defaultAdditionalPrice = 2400;

export default class SimulateStore {
  @observable altarItem: any = null;

  @observable useTotalCount = 0;
  @observable useCubeCount = 0;
  @observable useRedCubeCount = 0;
  @observable useBlackCubeCount = 0;
  @observable useAdditionalCubeCOunt = 0;

  @observable specifiedPotentialLevel = 1 || defaultPotentialLevel;
  @observable potentialLabelList: Record<number, CUBE_POTENTIAL_LEVEL> = {
    0: 'hidden',
    1: 'rare',
    2: 'epic',
    3: 'unique',
    4: 'regendary',
  };

  @observable defaultCubeGiven: Record<MAJOR_EQUIP_SET_LINE, CallEquipSetLineReq> = {
    rootAbyss: {
      minItemLevel: 150,
      maxItemLevel: 150,
      overallCategory: 'equip',
    },
    absolab: {
      minItemLevel: 160,
      maxItemLevel: 160,
      overallCategory: 'equip',
    },
    arcaneUmbra: {
      minItemLevel: 200,
      maxItemLevel: 200,
      overallCategory: 'equip',
    },
  };

  @observable equipmentStorage: any = {
    Equip: {
      Beginner: {},
      Warrior: {},
      Bowman: {},
      Magician: {},
      Thief: {},
      Pirate: {},
    },
  };

  @observable wearingEquipment: any = {
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
  };

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
  @observable isHidden = defaultIsHidden;
  @observable potential: any;
  @observable currentPotentialLevel: any = defaultPotentialLevel;
  @observable currentPotentialStyle: any = defaultPotentialStyle;
  @observable currentPotential1: any;
  @observable currentPotential2: any;
  @observable currentPotential3: any;
  @observable pastPotential1: any;
  @observable pastPotential2: any;
  @observable pastPotential3: any;
  @observable currentOverallCategory: any;
  @observable currentCategory: any;

  @observable cubeItemRootAbyss: any;
  @observable cubeItemAbsolab: any;
  @observable cubeItemArcaneUmbra: any;
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
    Array.from(result.data).forEach((value: any) => {
      if (!_.isUndefined(this.equipmentStorage[value.overall_category][value.req_jobs][value.category])) {
        this.equipmentStorage[value.overall_category][value.req_jobs][value.category].push(value);
      } else {
        this.equipmentStorage[value.overall_category][value.req_jobs][value.category] = [];
      }
    });
  }

  @action styleWearing = (item: any, category?: any, overallCategory?: any) => {
    let wearing;

    if (category && overallCategory) {
      wearing = this.wearingEquipment[overallCategory][category];
    } else {
      const c: any = this.getCategory(item);
      wearing = this.wearingEquipment[c.overallCategory][c.category];
    }

    if (wearing.currentPotentialLevel) {
      wearing.currentPotentialStyle = this.potentialLabelList[wearing.currentPotentialLevel];
    } else {
      wearing.currentPotentialStyle = 'hidden';
    }
  }

  @action generateIcon = (itemId: number) => {
    return `https://items.maplestory.io/api/kms/323/item/${itemId}/icon`;
  }

  @action getCategory = (item: any) => {
    const result: any = {};
    result.overallCategory = item.overall_category.toLowerCase();
    if (_.includes(item.category.toLowerCase(), 'weapon')) {
      result.category = 'weapon';
    }

    return result;
  }

  @action setWearingEquipment = (item: any) => {
    const c = this.getCategory(item);

    this.currentOverallCategory = c.overallCategory;
    this.currentCategory = c.category;
    this.wearingEquipment[c.overallCategory][c.category] = item;
  }

  @action setPotential = (data: any, category: any, overallCategory: any) => {
    this.currentPotentialLevel = data.potentialLevel;
    this.potential = data.potential;

    if (category && overallCategory) {
      this.wearingEquipment[overallCategory][category].currentPotentialLevel = data.potentialLevel;
      this.wearingEquipment[overallCategory][category].potential = data.potential;
    }
  }

  @action init = () => {
    this.currentPotentialStyle = '';
    this.fillEquipmentStorage();
  }

  @action clearItem = (itemNo: number, overallCategory: any, category: any) => {
    if (this.altarItem.item_no === itemNo) {
      this.altarItem = undefined;
      this.currentPotentialStyle = undefined;
    }

    this.wearingEquipment[overallCategory][category] = {};
  }

  @action clearPotential = () => {
    this.potential = undefined;
    this.currentPotentialStyle = defaultPotentialStyle;
    this.currentPotentialLevel = defaultPotentialLevel;
  }

  @action selectAltarItem = (item: any) => {
    this.altarItem = item;
    this.clearPotential();
    this.setWearingEquipment(item);
    this.styleCubeAltar();
    this.styleWearing(item);
  }

  @action transformAltarItem = (data: any, cubeData: any) => {
    this.useCubeCount += 1;
    this.isHidden = 0;

    if (cubeData.item_no === 5062009) {
      this.useRedCubeCount += 1;
    } else if (cubeData.item_no === 5062010) {
      this.useBlackCubeCount += 1;
    }

    this.useTotalCount = this.useRedCubeCount * defaultRedPrice + this.useBlackCubeCount * defaultBlackPrice;
    this.setPotential(data, this.currentCategory, this.currentOverallCategory);
    this.styleWearing(data, this.currentCategory, this.currentOverallCategory);
    this.styleCubeAltar();
  }
}
