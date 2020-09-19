import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from 'components/Button';
import DesactivedButton from 'components/DesactivedButton';
import ReactPlayer from 'react-player';
import './react_player.css';
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

const wrapperStyle = {
  width: '100%',
  padding: '0 100px 0 100px',
};

const videoStyle = {
  align: 'center',
};

export default function SimpleAccordionLaunch(props) {
  const classes = useStyles();
  const { launch } = props;

  return (
    <div className={classes.root}>
      <div className="player-wrapper" style={wrapperStyle}>
        <ReactPlayer
          style={videoStyle}
          playing
          className="react-player"
          width="100%"
          height="100%"
          controls
          url={launch.links.video_link}
        />
      </div>
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
            <FormattedMessage {...messages.missionname} />
            {launch.mission_name}
            <br />
            <FormattedMessage {...messages.date} />
            {new Date(launch.launch_date_utc).getDate()} -{' '}
            {new Date(launch.launch_date_utc).getMonth() + 1} -{' '}
            {new Date(launch.launch_date_utc).getYear() + 1900}
            <br />
            <FormattedMessage {...messages.attempt} />
            {launch.is_tentative ? 'Oui' : 'Non'}
            <br />
            <FormattedMessage {...messages.ships} />
            {launch.ships}
            <br />
            <FormattedMessage {...messages.launchsite} />
            <br />
            <FormattedMessage {...messages.sitename} />
            {launch.launch_site.site_name}
            <br />
            <FormattedMessage {...messages.totalname} />
            {launch.launch_site.site_name_long}
            <br />
            <FormattedMessage {...messages.crew} />
            {launch.crew}
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
            <FormattedMessage {...messages.rocket} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormattedMessage {...messages.name} />
            {launch.rocket.rocket_name}
            <br />
            <FormattedMessage {...messages.type} />
            {launch.rocket.rocket_type}
            <br />
            <h3>
              <FormattedMessage {...messages.firststage} />
            </h3>
            <br />
            <FormattedMessage {...messages.coreserial} />
            {launch.rocket.first_stage.cores[0].core_serial}
            <br />
            <FormattedMessage {...messages.flight} />
            {launch.rocket.first_stage.cores[0].flight}
            <br />
            <FormattedMessage {...messages.block} />
            {launch.rocket.first_stage.cores[0].block}
            <br />
            <FormattedMessage {...messages.gridfins} />
            {launch.rocket.first_stage.cores[0].gridfins ? 'Oui' : 'Non'}
            <br />
            <FormattedMessage {...messages.legs} />
            {launch.rocket.first_stage.cores[0].legs ? 'Oui' : 'Non'}
            <br />
            <FormattedMessage {...messages.reused} />
            {launch.rocket.first_stage.cores[0].reused ? 'Oui' : 'Non'}
            <br />
            <FormattedMessage {...messages.landsuccess} />
            {launch.rocket.first_stage.cores[0].land_success}
            <br />
            <FormattedMessage {...messages.landingintent} />
            {launch.rocket.first_stage.cores[0].landing_intent ? 'Oui' : 'Non'}
            <br />
            <FormattedMessage {...messages.landingtype} />
            {launch.rocket.first_stage.cores[0].landing_type}
            <br />
            <FormattedMessage {...messages.landingvehicle} />
            {launch.rocket.first_stage.cores[0].landing_vehicle}
            <br />
            <h3>
              <FormattedMessage {...messages.secondstage} />
            </h3>
            <br />
            <FormattedMessage {...messages.block} />
            {launch.rocket.second_stage.block}
            <br />
            <FormattedMessage {...messages.payload} />
            <br />
            <FormattedMessage {...messages.name} />
            {launch.rocket.second_stage.payloads[0].payload_id}
            <br />
            <FormattedMessage {...messages.reused} />
            {launch.rocket.second_stage.payloads[0].reused ? 'Oui' : 'Non'}
            <br />
            <FormattedMessage {...messages.customers} />
            {launch.rocket.second_stage.payloads[0].customers.map(
              (customer, index) => ` Client n°${index}: ${customer} `,
            )}
            <br />
            <FormattedMessage {...messages.nationality} />
            {launch.rocket.second_stage.payloads[0].nationality}
            <br />
            <FormattedMessage {...messages.manufacturer} />
            {launch.rocket.second_stage.payloads[0].manufacturer}
            <br />
            <FormattedMessage {...messages.payloadtype} />
            {launch.rocket.second_stage.payloads[0].payload_type}
            <br />
            <FormattedMessage {...messages.payloadmass} />
            {launch.rocket.second_stage.payloads[0].payload_mass_kg} Kg
            <br />
            <FormattedMessage {...messages.orbittwopoints} />
            {launch.rocket.second_stage.payloads[0].orbit}
            <br />
            <FormattedMessage {...messages.carenage} />
            <br />
            <FormattedMessage {...messages.reused} />
            {launch.rocket.fairings && launch.rocket.fairings.reused}
            <br />
            <FormattedMessage {...messages.attempt} />
            {launch.rocket.fairings && launch.rocket.fairings.recoveryAttempt}
            <br />
            <FormattedMessage {...messages.recovered} />
            {launch.rocket.fairings && launch.rocket.fairings.recovered}
            <br />
            <FormattedMessage {...messages.navire} />
            {launch.rocket.fairings && launch.rocket.fairings.ship}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            <FormattedMessage {...messages.orbit} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormattedMessage {...messages.orbitparams} />
            <br />
            <FormattedMessage {...messages.referencesystem} />
            {
              launch.rocket.second_stage.payloads[0].orbit_params
                .reference_system
            }
            <br />
            <FormattedMessage {...messages.orbitlevel} />
            {launch.rocket.second_stage.payloads[0].orbit_params.regime}
            <br />
            <FormattedMessage {...messages.longitude} />
            {launch.rocket.second_stage.payloads[0].orbit_params.longitude}
            <br />
            <FormattedMessage {...messages.bigaxe} />
            {
              launch.rocket.second_stage.payloads[0].orbit_params
                .semi_major_axis_km
            }{' '}
            Km
            <br />
            <FormattedMessage {...messages.excentricite} />
            {launch.rocket.second_stage.payloads[0].orbit_params.eccentricity}
            <br />
            <FormattedMessage {...messages.periastre} />
            {
              launch.rocket.second_stage.payloads[0].orbit_params.periapsis_km
            }{' '}
            Km
            <br />
            <FormattedMessage {...messages.apoapsis} />
            {launch.rocket.second_stage.payloads[0].orbit_params.apoapsis_km} Km
            <br />
            <FormattedMessage {...messages.incilaison} />
            {
              launch.rocket.second_stage.payloads[0].orbit_params
                .inclination_deg
            }{' '}
            Deg
            <br />
            <FormattedMessage {...messages.period} />
            {launch.rocket.second_stage.payloads[0].orbit_params.period_min}
            <br />
            <FormattedMessage {...messages.autonomy} />
            {
              launch.rocket.second_stage.payloads[0].orbit_params.lifespan_years
            }{' '}
            Année(s)
            <br />
            <FormattedMessage {...messages.epoq} />
            {launch.rocket.second_stage.payloads[0].orbit_params.epoch}
            <br />
            <FormattedMessage {...messages.averagemove} />
            {launch.rocket.second_stage.payloads[0].orbit_params.mean_motion}
            <br />
            <FormattedMessage {...messages.raan} />
            {launch.rocket.second_stage.payloads[0].orbit_params.raan}
            <br />
            <FormattedMessage {...messages.pericentre} />
            {
              launch.rocket.second_stage.payloads[0].orbit_params
                .arg_of_pericenter
            }
            <br />
            <FormattedMessage {...messages.anomaly} />
            {launch.rocket.second_stage.payloads[0].orbit_params.mean_anomaly}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>
            <FormattedMessage {...messages.houston} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormattedMessage {...messages.successlaunch} />
            {launch.launch_success ? (
              <FormattedMessage {...messages.true} />
            ) : (
              <FormattedMessage {...messages.false} />
            )}
            <br />
            <FormattedMessage {...messages.launchproblem} />
            <br />
            <FormattedMessage {...messages.time} />
            {!launch.launch_success ? (
              `${launch.launch_failure_details.time}min`
            ) : (
              <div />
            )}
            <br />
            <FormattedMessage {...messages.reason} />
            {!launch.launch_success ? (
              launch.launch_failure_details.reason
            ) : (
              <div />
            )}
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>
            <FormattedMessage {...messages.abstract} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{launch.details}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography className={classes.heading}>
            <FormattedMessage {...messages.links} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div width="100%" className="myvertical">
            <div width="100%" className="myhorizontal">
              {launch.links.mission_patch ? (
                <span>
                  <a target="_blank" href={launch.links.mission_patch}>
                    <Button>
                      <FormattedMessage {...messages.ecusson} />
                    </Button>
                  </a>
                </span>
              ) : (
                <span>
                  <DesactivedButton>
                    <FormattedMessage {...messages.ecusson} />
                  </DesactivedButton>
                </span>
              )}
              {launch.links.reddit_campaign ? (
                <span align="center" width="200px">
                  <a target="_blank" href={launch.links.reddit_campaign}>
                    <Button>
                      <FormattedMessage {...messages.campagnereddit} />
                    </Button>
                  </a>
                </span>
              ) : (
                <span align="center" width="200px">
                  <DesactivedButton>
                    <FormattedMessage {...messages.campagnereddit} />
                  </DesactivedButton>
                </span>
              )}
              {launch.links.reddit_launch ? (
                <span align="center" width="200px">
                  <a target="_blank" href={launch.links.reddit_launch}>
                    <Button>
                      <FormattedMessage {...messages.lancementreddit} />
                    </Button>
                  </a>
                </span>
              ) : (
                <span align="center" width="200px">
                  <DesactivedButton>
                    <FormattedMessage {...messages.lancementreddit} />
                  </DesactivedButton>
                </span>
              )}
              {launch.links.reddit_recovery ? (
                <span align="center" width="200px">
                  <a target="_blank" href={launch.links.reddit_recovery}>
                    <Button>
                      <FormattedMessage {...messages.recuperationreddit} />
                    </Button>
                  </a>
                </span>
              ) : (
                <span align="center" width="200px">
                  <DesactivedButton>
                    <FormattedMessage {...messages.recuperationreddit} />
                  </DesactivedButton>
                </span>
              )}
            </div>
            <br />
            <div width="100%" className="myhorizontal">
              {launch.links.reddit_media ? (
                <div align="center" width="12%">
                  <a target="_blank" href={launch.links.reddit_media}>
                    <Button>
                      <FormattedMessage {...messages.mediareddit} />
                    </Button>
                  </a>
                </div>
              ) : (
                <div align="center" width="30%">
                  <DesactivedButton>
                    <FormattedMessage {...messages.mediareddit} />
                  </DesactivedButton>
                </div>
              )}
              {launch.links.presskit ? (
                <div align="center" width="12%">
                  <a target="_blank" href={launch.links.presskit}>
                    <Button>
                      <FormattedMessage {...messages.presse} />
                    </Button>
                  </a>
                </div>
              ) : (
                <div align="center" width="30%">
                  <DesactivedButton>
                    <FormattedMessage {...messages.presse} />
                  </DesactivedButton>
                </div>
              )}
              {launch.links.article_link ? (
                <div align="center" width="12%">
                  <a target="_blank" href={launch.links.article_link}>
                    <Button>
                      <FormattedMessage {...messages.article} />
                    </Button>
                  </a>
                </div>
              ) : (
                <div align="center" width="30%">
                  <DesactivedButton>
                    <FormattedMessage {...messages.article} />
                  </DesactivedButton>
                </div>
              )}
              {launch.links.wikipedia ? (
                <div align="center" width="12%">
                  <a target="_blank" href={launch.links.wikipedia}>
                    <Button>
                      <FormattedMessage {...messages.wikipedia} />
                    </Button>
                  </a>
                </div>
              ) : (
                <div align="center" width="30%">
                  <DesactivedButton>
                    <FormattedMessage {...messages.wikipedia} />
                  </DesactivedButton>
                </div>
              )}
              {launch.telemetry.flight_club ? (
                <div align="center" width="12%">
                  <a target="_blank" href={launch.telemetry.flight_club}>
                    <Button>
                      <FormattedMessage {...messages.flightclub} />
                    </Button>
                  </a>
                </div>
              ) : (
                <div align="center" width="30%">
                  <DesactivedButton>
                    <FormattedMessage {...messages.flightclub} />
                  </DesactivedButton>
                </div>
              )}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography className={classes.heading}>
            <FormattedMessage {...messages.img} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Karoussel
            pictures={launch.links.flickr_images}
            name={launch.mission_name}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

SimpleAccordionLaunch.propTypes = {
  launch: PropTypes.object,
};
