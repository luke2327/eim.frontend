import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { observer, inject } from 'mobx-react';

@inject('simulate')
@observer
class WearingTooltip extends Component {
  render() {
    const HtmlTooltip = withStyles((theme) => ({
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        color: 'rgba(255, 255, 255, 0.95)',
        minWidth: '260px',
        border: '1px solid #dadde9',
      },
    }))(Tooltip);
    const { simulate } = this.props;
    const item = simulate.wearingEquipment[simulate.currentOverallCategory][simulate.currentCategory];

    return (
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography variant="h6" color="inherit" style={{ textAlign: 'center' }}>{item.name_ko}</Typography>
            <div className="equip-tooltip">
              <div className="item-box center-flex">
                <img alt="altarItem" src={simulate.generateIcon(item.item_no)} />
              </div>
              <div className="flex-vertical-start">
                <p className="req-opt" display="block">
                  {`REQ LEV : ${item.req_level}`}
                </p>
                <div className="vertical-line" />
                <div className="flex-vertical-start">
                  <div className="flexible">
                    <p className="req-opt" display="block">
                      <span className="opt-name">{'REQ STR'}</span>{`: ${item.req_str || '000'}`}
                    </p>
                    <p className="req-opt" display="block">
                      <span className="opt-name">{'REQ LUK'}</span>{`: ${item.req_luk || '000'}`}
                    </p>
                  </div>
                  <div className="flexible">
                    <p className="req-opt" display="block">
                      <span className="opt-name">{'REQ DEX'}</span>{`: ${item.req_opt || '000'}`}
                    </p>
                    <p className="req-opt" display="block">
                      <span className="opt-name">{'REQ INT'}</span>{`: ${item.req_int || '000'}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="vertical-line" />
            <div className="mid-line">
              <div className="inc-opt">{ item.category ? `무기분류 : ${item.sub_category} (${item.category})` : null}</div>
              <div className="inc-opt">{ item.attack_speed ? `공격속도 : ${item.attack_speed}` : null}</div>
              <div className="inc-opt">{ item.inc_str ? `STR : +${item.inc_str}` : null}</div>
              <div className="inc-opt">{ item.inc_dex ? `DEX : +${item.inc_dex}` : null}</div>
              <div className="inc-opt">{ item.inc_int ? `INT : +${item.inc_int}` : null}</div>
              <div className="inc-opt">{ item.inc_luk ? `LUK : +${item.inc_luk}` : null}</div>
              <div className="inc-opt">{ item.inc_mhp ? `MaxHP : +${item.inc_mhp}` : null}</div>
              <div className="inc-opt">{ item.inc_mmp ? `MaxMP : +${item.inc_mmp}` : null}</div>
              <div className="inc-opt">{ item.inc_pad ? `공격력 : +${item.inc_pad}` : null}</div>
              <div className="inc-opt">{ item.inc_mad ? `마력 : +${item.inc_mad}` : null}</div>
              <div className="inc-opt">{ item.inc_pdd ? `물리방어력 : +${item.inc_pdd}` : null}</div>
              <div className="inc-opt">{ item.inc_mdd ? `마법방어력 : +${item.inc_mdd}` : null}</div>
              <div className="inc-opt">{ item.inc_acc ? `명중치 : +${item.inc_acc}` : null}</div>
              <div className="inc-opt">{ item.inc_eva ? `회피치 : +${item.inc_eva}` : null}</div>
              <div className="inc-opt">{ item.bd_r ? `보스 몬스터 공격 시 데미지 : +${item.bd_r}%` : null}</div>
              <div className="inc-opt">{ item.imd_r ? `몬스터 방어율 무시 : +${item.imd_r}%` : null}</div>
              <div className="inc-opt">{ item.tuc ? `업그레이드 가능 횟수 : ${item.tuc}` : null}</div>
            </div>
            {
              item.potential
                ? (
                  <React.Fragment>
                    <div className="vertical-line" />
                    <div className="bottom-line">
                      <div className="p-above">
                        {
                          _.map(item.potential, (potential, key) => {
                            return (
                              <p key={key}>
                                {potential}
                              </p>
                            );
                          })
                        }
                      </div>
                    </div>
                  </React.Fragment>
                )
                : null
            }

          </React.Fragment>
        }
      >
        <img alt="altarItem" src={simulate.generateIcon(item.item_no)} />
      </HtmlTooltip>
    );
  }
}

export default WearingTooltip;
