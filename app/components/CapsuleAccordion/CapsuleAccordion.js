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

export default function CapsuleAccordion(props) {
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
            <FormattedMessage {...messages.name} /> {props.capsule.capsule_id}
            <br />
            <FormattedMessage {...messages.capsule_serial} />
            {props.capsule.capsule_serial}
            <br />
            <FormattedMessage {...messages.status} />
            {props.capsule.status}
            <br />
            <FormattedMessage {...messages.original_launch} />
            {new Date(props.capsule.original_launch).getDate()} -{' '}
            {new Date(props.capsule.original_launch).getMonth() + 1} -{' '}
            {new Date(props.capsule.original_launch).getYear() + 1900}
            <br />
            <FormattedMessage {...messages.landings} />
            {props.capsule.landings}
            <br />
            <FormattedMessage {...messages.type} />
            {props.capsule.type}
            <br />
            <FormattedMessage {...messages.reuse_count} />
            {props.capsule.reuse_count}
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
          <Typography>{props.capsule.details}</Typography>
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
          {props.capsule.missions.map(mission => (
            <Typography component={'span'} key={mission.flight}>
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
  )
};

CapsuleAccordion.propTypes = {
  capsule: PropTypes.object
};
