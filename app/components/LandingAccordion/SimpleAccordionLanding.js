import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from 'components/Button';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { FormattedMessage } from 'react-intl';
import DesactivedButton from 'components/DesactivedButton';
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

const topSpace = {
  marginTop: '40px',
};

export default function SimpleAccordionDragon(props) {
  const classes = useStyles();
  const { landing } = props;

  return (
    <div className={classes.root} style={topSpace}>
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
            {landing.full_name}
            <br />
            <FormattedMessage {...messages.status} />
            {landing.status}
            <br />
            <FormattedMessage {...messages.type} />
            {landing.landing_type}
            <br />
            <FormattedMessage {...messages.attempted} />
            {landing.attempted_landings}
            <br />
            <FormattedMessage {...messages.success} />
            {landing.successful_landings}
            <br />
            <FormattedMessage {...messages.location} />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.locname} />
            {landing.location.name}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.locregion} />
            {landing.location.region}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.loclat} />
            {landing.location.latitude}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.loclong} />
            {landing.location.longitude}
            <br />
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
          <Typography>{landing.details}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            <FormattedMessage {...messages.links} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table>
            <TableRow>
              <TableCell align="left" width="30%" />
              {landing.wikipedia ? (
                <TableCell align="center" width="30%">
                  <a target="_blank" href={landing.wikipedia}>
                    <Button>Wikipedia</Button>
                  </a>
                </TableCell>
              ) : (
                <DesactivedButton>Wikipedia</DesactivedButton>
              )}
              <TableCell align="right" width="30%" />
            </TableRow>
          </Table>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

SimpleAccordionDragon.propTypes = {
  landing: PropTypes.object,
};
