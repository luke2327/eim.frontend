import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { Close } from '@material-ui/icons';
import ReactTooltip from 'react-tooltip';

const commonUtil = {
  TooltipMessage: (Method) => {
    const { Param } = Method;
    function arrowGenerator(color) {
      return {
        '&[x-placement*="bottom"] $arrow': {
          top: 0,
          left: 0,
          marginTop: '-0.95em',
          width: '2em',
          height: '1em',
          '&::before': {
            borderWidth: '0 1em 1em 1em',
            borderColor: `transparent transparent ${color} transparent`,
          },
        },
        '&[x-placement*="top"] $arrow': {
          bottom: 0,
          left: 0,
          marginBottom: '-0.95em',
          width: '2em',
          height: '1em',
          '&::before': {
            borderWidth: '1em 1em 0 1em',
            borderColor: `${color} transparent transparent transparent`,
          },
        },
        '&[x-placement*="right"] $arrow': {
          left: 0,
          marginLeft: '-0.95em',
          height: '2em',
          width: '1em',
          '&::before': {
            borderWidth: '1em 1em 1em 0',
            borderColor: `transparent ${color} transparent transparent`,
          },
        },
        '&[x-placement*="left"] $arrow': {
          right: 0,
          marginRight: '-0.95em',
          height: '2em',
          width: '1em',
          '&::before': {
            borderWidth: '1em 0 1em 1em',
            borderColor: `transparent transparent transparent ${color}`,
          },
        },
      };
    }

    const useStylesBootstrap = makeStyles((theme) => ({
      arrow: {
        position: 'absolute',
        fontSize: 6,
        '&::before': {
          content: '""',
          margin: 'auto',
          display: 'block',
          width: 0,
          height: 0,
          borderStyle: 'solid',
        },
      },
      popper: arrowGenerator(theme.palette.common.black),
      tooltip: {
        position: 'relative',
        backgroundColor: theme.palette.common.black,
      },
      tooltipPlacementLeft: {
        margin: '0 8px',
      },
      tooltipPlacementRight: {
        margin: '0 8px',
      },
      tooltipPlacementTop: {
        margin: '8px 0',
      },
      tooltipPlacementBottom: {
        margin: '8px 0',
      },
    }));

    function BootstrapTooltip(props) {
      const { arrow, ...classes } = useStylesBootstrap();
      const [arrowRef, setArrowRef] = React.useState(null);

      return (
        <Tooltip
          classes={classes}
          PopperProps={{
            popperOptions: {
              modifiers: {
                arrow: {
                  enabled: Boolean(arrowRef),
                  element: arrowRef,
                },
              },
            },
          }}
          {...props}
          title={
            <React.Fragment>
              {props.title}
              <span className={arrow} ref={setArrowRef} />
            </React.Fragment>
          }
        />
      );
    }

    return (
      <BootstrapTooltip title={'hello'}>
        <p>hello</p>
      </BootstrapTooltip>
    );
  },

  ItemIconTooltip: (data) => {
    const { props, simulate } = data;

    return (
      <React.Fragment>
        <img
          alt="weapon"
          src={simulate.generateIcon(props.item_no)}
          data-for={props.sub_category}
          data-tip={props.name_ko}
        />
        <ReactTooltip effect="solid" place="right" id={props.sub_category} />
      </React.Fragment>
    );
  },
};

export default commonUtil;
