import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import mapleApi from 'src/libs/api/maple';

@inject('common')
@observer
class DevComponent extends Component {
  callMapleItem = () => {
    const req = {
      minLevelFilter: 160,
      maxLevelFilter: 170,
      startPosition: 0,
      locale: this.props.common.selectedLang,
    };

    console.log('request data : ', req);

    mapleApi.getMapleItem(req).then((res) => {
      console.log('response data :', res);
    });
  }

  callMapleItemCube = () => {
    const req = {
      subCategoryFilter: 'Miracle Cube',
      locale: 'ko',
    };

    mapleApi.inputMapleItem(req).then((res) => {
      console.log(res);
    });
  }

  inputMapleItemMeta = () => {
    const req = {
      minLevelFilter: 160,
      maxLevelFilter: 160,
      overallCategory: 'Equip',
      category: ['One-Handed Weapon', 'Two-Handed Weapon'],
      locale: this.props.common.selectedLang,
    };

    mapleApi.inputMapleItemMeta(req).then((res) => {
      console.log('response data :', res);
    });
  }

  inputMapleItemArmor = () => {
    const req = {
      minLevelFilter: 200,
      maxLevelFilter: 200,
      overallCategoryFilter: 'Equip',
      categoryFilter: 'Armor',
    };

    mapleApi.inputMapleItem(req).then((res) => {
      console.log(res);
    });
  }

  inputMapleItemArmorMeta = () => {
    const req = {
      minLevelFilter: 150,
      maxLevelFilter: 150,
      overallCategory: 'Equip',
      category: 'Armor',
      locale: this.props.common.selectedLang,
    };

    mapleApi.inputMapleItemMeta(req).then((res) => {
      console.log('response data :', res);
    });
  }

  render() {
    return (
      <div
        className="default w100p h100p margin-center-hori center-flex"
        style={{ background: 'url(https://cinnamoroll-officialfanclub.com/s3/skiyaki/uploads/artist_photo/image/4286/king_cinnamon.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center' }}
      >
        <div
          className="w70p h70p margin-center-hori"
          style={{ backgroundColor: 'rgba(255,255,255,0.6)',
            border: '1.5px solid #e0e0e8',
            padding: '200px' }}
        >
          <div className="between-flex" style={{ width: '300px' }}>
            Call Maple Item 160 ~ 170
            <button
              type="button"
              className="btn-outline-primary btn"
              style={{ marginLeft: '15px' }}
              onClick={() => this.callMapleItem()}
            >
              Call
            </button>
          </div>
          <div className="between-flex" style={{ width: '300px' }}>
            Call Maple Item Cube Item
            <button
              type="button"
              className="btn-outline-primary btn"
              style={{ marginLeft: '15px' }}
              onClick={() => this.callMapleItemCube()}
            >
              Call
            </button>
          </div>
          <div className="between-flex" style={{ width: '300px' }}>
            Input Maple Item Weapon Meta
            <button
              type="button"
              className="btn-outline-primary btn"
              style={{ marginLeft: '15px' }}
              onClick={() => this.inputMapleItemMeta()}
            >
              Call
            </button>
          </div>
          <div className="between-flex" style={{ width: '300px' }}>
            Input Maple Item Armor
            <button
              type="button"
              className="btn-outline-primary btn"
              style={{ marginLeft: '15px' }}
              onClick={() => this.inputMapleItemArmor()}
            >
              Call
            </button>
          </div>
          <div className="between-flex" style={{ width: '300px' }}>
            Input Maple Item Armor Meta
            <button
              type="button"
              className="btn-outline-primary btn"
              style={{ marginLeft: '15px' }}
              onClick={() => this.inputMapleItemArmorMeta()}
            >
              Call
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DevComponent;
