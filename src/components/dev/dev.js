import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import mapleApi from 'libs/api/maple';

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

  render() {
    return (
      <div
        className="default w100p h100p margin-center-hori center-flex"
        style={{ background: 'url(https://life-hacking.net/wp-content/uploads/2017/05/444a80ed-500x321.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center' }}
      >
        <div className="w70p h70p margin-center-hori" style={{ backgroundColor: 'rgba(255,255,255,0.6)', border: '1.5px solid #e0e0e8', padding: '200px' }}>
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
        </div>
      </div>
    );
  }
}

export default DevComponent;