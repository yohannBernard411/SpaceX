import React from 'react';
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
import messages from './messages';
import DesactivedButton from 'components/DesactivedButton';

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
            {props.landing.full_name}
            <br />
            <FormattedMessage {...messages.status} />
            {props.landing.status}
            <br />
            <FormattedMessage {...messages.type} />
            {props.landing.landing_type}
            <br />
            <FormattedMessage {...messages.attempted} />
            {props.landing.attempted_landings}
            <br />
            <FormattedMessage {...messages.success} />
            {props.landing.successful_landings}
            <br />
            <FormattedMessage {...messages.location} />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.locname} />
            {props.landing.location.name}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.locregion} />
            {props.landing.location.region}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.loclat} />
            {props.landing.location.latitude}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.loclong} />
            {props.landing.location.longitude}
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
          <Typography>{props.landing.details}</Typography>
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
              {props.landing.wikipedia ? (
                <TableCell align="center" width="30%">
                  <a target="_blank" href={props.landing.wikipedia}>
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
