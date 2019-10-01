import { observable, action } from 'mobx';

export default class simulateStore {
  @observable defaultIsHidden = 1;
  @observable defaultPotentialLevel = 0;
  @observable defaultPotentialStyle = 'main-cube-zone';

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

  @action styleCubeAltar = () => {
    const defaultClass = 'main-cube-zone';

    if (this.isHidden) {
      this.currentPotentialStyle = `hidden ${defaultClass}`;
    } else if (this.altarItem) {
      this.currentPotentialStyle = `${this.potentialLabelList[this.currentPotentialLevel]} ${defaultClass}`;
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

  @observable cubeItemRootAbyss;
  @observable cubeItemAbsolab;
  @observable cubeItemAracneUmbra;
  @observable availableCubeList = [];

  @action generateIcon = (itemId) => {
    return `https://items.maplestory.io/api/kms/323/item/${itemId}/icon`;
  }

  @observable altarItem;

  @action selectAltarItem = (item) => {
    this.altarItem = item;
    this.styleCubeAltar();
  }

  @action transformAltarItem = (data, cubeData) => {
    console.log(cubeData);
    this.isHidden = 0;
    this.currentPotentialLevel = data.potentialLevel;
    if (cubeData.item_no === 5062009) {
      this.potential = data.potential;
      this.currentPotential1 = data.potential['0'];
      this.currentPotential2 = data.potential['1'];
      this.currentPotential3 = data.potential['2'];
    } else if (cubeData.item_no === 5062010) {
      this.currentPotential1 = data.potential['0'];
      this.currentPotential2 = data.potential['1'];
      this.currentPotential3 = data.potential['2'];
    }
    this.styleCubeAltar();
  }
}
