import React from 'react';

const CustomTooltip = React({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
  },

  getIntroOfPage(label) {
    return label;
  },

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{this.getIntroOfPage(label)}</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    }

    return null;
  },
});

export default CustomTooltip;
