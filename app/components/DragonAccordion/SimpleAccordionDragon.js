import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Karoussel from 'components/DisplayImages/Karoussel';
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

const topSpace = {
  marginTop: '40px',
};

export default function SimpleAccordionDragon(props) {
  const classes = useStyles();
  const { dragon } = props;

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
            {dragon.name}
            <br />
            <FormattedMessage {...messages.serial} />
            {dragon.id}
            <br />
            <FormattedMessage {...messages.type} />
            {dragon.type}
            <br />
            <FormattedMessage {...messages.active} />
            {dragon.active ? 'Oui' : 'Non'}
            <br />
            <FormattedMessage {...messages.crew_capacity} />
            {dragon.crew_capacity} pers
            <br />
            <FormattedMessage {...messages.sidewall_angle_deg} />
            {dragon.sidewall_angle_deg} degrés
            <br />
            <FormattedMessage {...messages.orbit_duration_yr} />
            {dragon.orbit_duration_yr} ans
            <br />
            <FormattedMessage {...messages.dry_mass_kg} />
            {dragon.dry_mass_kg} Kg
            <br />
            <FormattedMessage {...messages.first_flight} />
            {new Date(dragon.first_flight).getDate()} -{' '}
            {new Date(dragon.first_flight).getMonth() + 1} -{' '}
            {new Date(dragon.first_flight).getYear() + 1900}
            <br />
            <br />
            <FormattedMessage {...messages.shield} />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.material} />
            {dragon.heat_shield.material},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.size_meters} />
            {dragon.heat_shield.size_meters} m,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.temp_degrees} />
            {dragon.heat_shield.temp_degrees} °C,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.dev_partner} />
            {dragon.heat_shield.dev_partner}
            <br />
            <br />
            <FormattedMessage {...messages.thrusters} />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.thruster_type} />
            {dragon.thrusters[0].type},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.thruster_amount} />
            {dragon.thrusters[0].amount},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.thruster_pods} />
            {dragon.thrusters[0].pods},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.thruster_fuel1} />
            {dragon.thrusters[0].fuel_1},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.thruster_fuel2} />
            {dragon.thrusters[0].fuel_2},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.thruster_isp} />
            {dragon.thrusters[0].isp} isp,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FormattedMessage {...messages.thruster_thrust} />
            {dragon.thrusters[0].thrust.kN} kN,
            <br />
            <br />
            <FormattedMessage {...messages.launch_payload_mass} />
            {dragon.launch_payload_mass.kg} Kg,
            <br />
            <FormattedMessage {...messages.launch_payload_vol} />
            {dragon.launch_payload_vol.cubic_meters} m3,
            <br />
            <FormattedMessage {...messages.return_payload_mass} />
            {dragon.return_payload_mass.kg} Kg,
            <br />
            <FormattedMessage {...messages.return_payload_vol} />
            {dragon.return_payload_vol.cubic_meters} m3,
            <br />
            <FormattedMessage {...messages.diameter} />
            {dragon.diameter.meters} m.
            <br />
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
          <Typography>{dragon.description}</Typography>
        </AccordionDetails>
      </Accordion>
      <Karoussel pictures={dragon.flickr_images} name={dragon.name} />
    </div>
  );
}

SimpleAccordionDragon.propTypes = {
  dragon: PropTypes.object,
};
