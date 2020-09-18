import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordionCore(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <FormattedMessage {...messages.info} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormattedMessage {...messages.name} />
            {props.core.core_serial}
            <br />
            <FormattedMessage {...messages.capsule_serial} />
            {props.core.status}
            <br />
            <FormattedMessage {...messages.status} />
            {props.core.block}
            <br />
            <FormattedMessage {...messages.original_launch} />
            {new Date(props.core.original_launch).getDate()} -{' '}
            {new Date(props.core.original_launch).getMonth() + 1} -{' '}
            {new Date(props.core.original_launch).getYear() + 1900}
            <br />
            <FormattedMessage {...messages.reuse_count} />
            {props.core.reuse_count}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            <FormattedMessage {...messages.abstract} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.core.details}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            <FormattedMessage {...messages.missions} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {props.core.missions.map((mission) => (
            <Typography component="span" key={mission.flight}>
              <div>
                <FormattedMessage {...messages.mission} />
                {mission.name} <br />
                <FormattedMessage {...messages.flight} />
                {mission.flight}
              </div>
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

SimpleAccordionCore.propTypes = {
  core: PropTypes.object,
  core_serial: PropTypes.string,
  status: PropTypes.string,
  block: PropTypes.string,
  original_launch: PropTypes.string,
  reuse_count: PropTypes.string,
  details: PropTypes.string,
  missions: PropTypes.object,
};
