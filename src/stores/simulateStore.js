import { observable, action } from 'mobx';

export default class simulateStore {
  @observable defaultPotentialLevel = 1;
  @observable potentialListByLevel = {
    1: ['all stat', 'atack', 'magic'],
  }

  @observable specifiedPotentialLevel = 1 || this.defaultPotentialLevel;
  @observable potentialLabelList = {
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

  @observable cubeItemRootAbyss;
  @observable cubeItemAbsolb;
  @observable cubeItemAracneUmbra;
  @observable availableCubeList = [];

  @action generateIcon = (itemId) => {
    return `https://items.maplestory.io/api/kms/323/item/${itemId}/icon`;
  }

  @observable altarItem;

  @action selectAltarItem = (item) => {
    this.altarItem = item;
  }
}
