import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import _ from 'lodash';
import WearingTooltip from './wearingTooltip';
import { Close } from '@material-ui/icons';
import ReactTooltip from 'react-tooltip';

const ClearButton = () => ({
  clear: (param) => {
    const item = param.simulate.wearingEquipment[param.overallCategory][param.category];
    param.simulate.clearItem(item.item_no, param.overallCategory, param.category);
  },
  render() {
    const { param } = this.props;
    return (
      <React.Fragment>
        <Close
          className="equip-clear cursor-pointer"
          data-for={param.category}
          data-tip="X버튼을 누르면 해당 아이템을 삭제합니다."
          onClick={() => { this.clear(param); }}
        />
        <ReactTooltip effect="solid" place="right" id={param.category} />
      </React.Fragment>
    );
  },
});

@inject('simulate')
@observer
class WearingEquip extends Component {
  render() {
    const { simulate } = this.props;
    console.log(toJS(simulate.wearingEquipment.equip.weapon));
    return (
      <div id="wearing-equip" className="wrapper">
        {/* line 1 */}
        <div className="equipment-item" id="ring-1">RING</div>
        <div className="equipment-item" id="ring-2">RING</div>
        <div className="equipment-item" id="ring-3">RING</div>
        <div className="equipment-item" id="ring-4">RING</div>
        <div className="equipment-item" id="pocket">POCKET</div>
        {/* line 2 */}
        <div className="equipment-item" id="pendant-1">PENDANT</div>
        <div className="equipment-item" id="pendant-2">PENDANT</div>
        <div className={['equipment-item', simulate.wearingEquipment.equip.weapon.currentPotentialStyle].join(' ')} id="weapon">
          <p className="caption">WEAPON</p>
          {
            !_.isEmpty(simulate.wearingEquipment.equip.weapon)
              ?
                <div className="item-cover center-flex w100p h100p">
                  <WearingTooltip simulate={simulate} />
                  <ClearButton param={{ category: 'weapon', overallCategory: 'equip', simulate: simulate }} />
                </div>
              : null
          }
        </div>
        <div className="equipment-item" id="belt">BELT</div>
        {/* line 3 */}
        <div className="equipment-item" id="hat">CAP</div>
        <div className="equipment-item" id="face-acc">FORE<br />HEAD</div>
        <div className="equipment-item" id="eye-deco">EYE<br />ACC</div>
        <div className="equipment-item" id="top">CLOTHES</div>
        <div className="equipment-item" id="bottom">PANTS</div>
        <div className="equipment-item" id="shoes">SHOES</div>
        {/* line 4 */}
        <div className="equipment-item" id="earring">EAR<br />ACC</div>
        <div className="equipment-item" id="shoulder">SHOULDER</div>
        <div className="equipment-item" id="glove">GLOVES</div>
        <div className="equipment-item" id="android">ANDROID</div>
        {/* line 5 */}
        <div className="equipment-item" id="emblem">EMBLEM</div>
        <div className="equipment-item" id="badge">BADGE</div>
        <div className="equipment-item" id="medal">MEDAL</div>
        <div className="equipment-item" id="sub-weapon">SUB<br />WEAPON</div>
        <div className="equipment-item" id="cape">CAPE</div>
        <div className="equipment-item" id="heart">HEART</div>
      </div>
    );
  }
}

export default WearingEquip;
