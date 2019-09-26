import { observable, action } from 'mobx';

export default class simulateStore {
  @observable defaultPotentialLevel = 1;
  @observable potentialListByLevel = {
    1: ['all stat', 'atack', 'magic'],
  }

  @observable specifiedPotentialLevel = 1 || this.defaultPotentialLevel;

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

  @observable cubeItemRootAbyss;
  @observable cubeItemAbsolb;
  @observable cubeItemAracneUmbra;

  @action generateIcon = (itemId) => {
    return `https://items.maplestory.io/api/kms/323/item/${itemId}/icon`;
  }

  @observable altarItem;

  @action selectAltarItem = (item) => {
    this.altarItem = item;
  }
}
