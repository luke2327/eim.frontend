import React from 'react';
import ReactTooltip from 'react-tooltip';

const commonUtil = {
  ItemIconTooltip: (data: any) => {
    const { props, simulate, common } = data;

    return (
      <React.Fragment>
        <img
          alt="weapon"
          src={simulate.generateIcon(props.item_no)}
          data-for={props.sub_category}
          data-tip={props.name_ko}
          // data-tip={props.name_[common.statedLanguage]}
          // TODO: 현재는 ko로 적용 나중에 추가
        />
        <ReactTooltip effect="solid" place="right" id={props.sub_category} />
      </React.Fragment>
    );
  },
};

export default commonUtil;
