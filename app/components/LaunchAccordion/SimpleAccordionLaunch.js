import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from 'components/Button';
import { NavLink } from 'react-router-dom';
import DesactivedButton from 'components/DesactivedButton';
import ReactPlayer from 'react-player';
import './react_player.css';
import Karoussel from 'components/Karoussel';
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

export default function SimpleAccordionLaunch(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="player-wrapper">
        <ReactPlayer
          playing
          className="react-player"
          width="100%"
          height="100%"
          controls
          url={props.launch.links.video_link}
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
            {props.launch.mission_name}
            <br />
            <FormattedMessage {...messages.date} />
            {new Date(props.launch.launch_date_utc).getDate()} -{' '}
            {new Date(props.launch.launch_date_utc).getMonth() + 1} -{' '}
            {new Date(props.launch.launch_date_utc).getYear() + 1900}
            <br />
            <FormattedMessage {...messages.attempt} />
            {props.launch.is_tentative ? 'Oui' : 'Non'}
            <br />
            <FormattedMessage {...messages.ships} />
            {props.launch.ships}
            <br />
            <FormattedMessage {...messages.launchsite} />
            <br />
            <FormattedMessage {...messages.sitename} />
            {props.launch.launch_site.site_name}
            <br />
            <FormattedMessage {...messages.totalname} />
            {props.launch.launch_site.site_name_long}
            <br />
            <FormattedMessage {...messages.crew} />
            {props.launch.crew}
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
            {props.launch.rocket.rocket_name}
            <br />
            <FormattedMessage {...messages.type} />
            {props.launch.rocket.rocket_type}
            <br />
            <h3>
              <FormattedMessage {...messages.firststage} />
            </h3>
            <br />
            <FormattedMessage {...messages.coreserial} />
            {props.launch.rocket.first_stage.cores[0].core_serial}
            <br />
            <FormattedMessage {...messages.flight} />
            {props.launch.rocket.first_stage.cores[0].flight}
            <br />
            <FormattedMessage {...messages.block} />
            {props.launch.rocket.first_stage.cores[0].block}
            <br />
            <FormattedMessage {...messages.gridfins} />
            {props.launch.rocket.first_stage.cores[0].gridfins ? 'Oui' : 'Non'}
            <br />
            <FormattedMessage {...messages.legs} />
            {props.launch.rocket.first_stage.cores[0].legs ? 'Oui' : 'Non'}
            <br />
            <FormattedMessage {...messages.reused} />
            {props.launch.rocket.first_stage.cores[0].reused ? 'Oui' : 'Non'}
            <br />
            <FormattedMessage {...messages.landsuccess} />
            {props.launch.rocket.first_stage.cores[0].land_success}
            <br />
            <FormattedMessage {...messages.landingintent} />
            {props.launch.rocket.first_stage.cores[0].landing_intent
              ? 'Oui'
              : 'Non'}
            <br />
            <FormattedMessage {...messages.landingtype} />
            {props.launch.rocket.first_stage.cores[0].landing_type}
            <br />
            <FormattedMessage {...messages.landingvehicle} />
            {props.launch.rocket.first_stage.cores[0].landing_vehicle}
            <br />
            <h3>
              <FormattedMessage {...messages.secondstage} />
            </h3>
            <br />
            <FormattedMessage {...messages.block} />
            {props.launch.rocket.second_stage.block}
            <br />
            <FormattedMessage {...messages.payload} />
            <br />
            <FormattedMessage {...messages.name} />
            {props.launch.rocket.second_stage.payloads[0].payload_id}
            <br />
            <FormattedMessage {...messages.reused} />
            {props.launch.rocket.second_stage.payloads[0].reused
              ? 'Oui'
              : 'Non'}
            <br />
            <FormattedMessage {...messages.customers} />
            {props.launch.rocket.second_stage.payloads[0].customers.map(
              (customer, index) => {
                ` Client n°${index}: ${customer} `;
              },
            )}
            <br />
            <FormattedMessage {...messages.nationality} />
            {props.launch.rocket.second_stage.payloads[0].nationality}
            <br />
            <FormattedMessage {...messages.manufacturer} />
            {props.launch.rocket.second_stage.payloads[0].manufacturer}
            <br />
            <FormattedMessage {...messages.payloadtype} />
            {props.launch.rocket.second_stage.payloads[0].payload_type}
            <br />
            <FormattedMessage {...messages.payloadmass} />
            {props.launch.rocket.second_stage.payloads[0].payload_mass_kg} Kg
            <br />
            <FormattedMessage {...messages.orbittwopoints} />
            {props.launch.rocket.second_stage.payloads[0].orbit}
            <br />
            <FormattedMessage {...messages.carenage} />
            <br />
            <FormattedMessage {...messages.reused} />
            {props.launch.rocket.fairings ? (
              props.launch.rocket.fairings.reused ? (
                <FormattedMessage {...messages.true} />
              ) : (
                <FormattedMessage {...messages.false} />
              )
            ) : (
              <div />
            )}{' '}
            <br />
            <FormattedMessage {...messages.attempt} />
            {props.launch.rocket.fairings ? (
              props.launch.rocket.fairings.recovery_attempt ? (
                <FormattedMessage {...messages.true} />
              ) : (
                <FormattedMessage {...messages.false} />
              )
            ) : (
              <div />
            )}{' '}
            <br />
            <FormattedMessage {...messages.recovered} />
            {props.launch.rocket.fairings ? (
              props.launch.rocket.fairings.recovered ? (
                <FormattedMessage {...messages.true} />
              ) : (
                <FormattedMessage {...messages.false} />
              )
            ) : (
              <div />
            )}{' '}
            <br />
            <FormattedMessage {...messages.navire} />
            {props.launch.rocket.fairings ? (
              props.launch.rocket.fairings.ship
            ) : (
              <div />
            )}{' '}
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
              props.launch.rocket.second_stage.payloads[0].orbit_params
                .reference_system
            }
            <br />
            <FormattedMessage {...messages.orbitlevel} />
            {props.launch.rocket.second_stage.payloads[0].orbit_params.regime}
            <br />
            <FormattedMessage {...messages.longitude} />
            {
              props.launch.rocket.second_stage.payloads[0].orbit_params
                .longitude
            }
            <br />
            <FormattedMessage {...messages.bigaxe} />
            {
              props.launch.rocket.second_stage.payloads[0].orbit_params
                .semi_major_axis_km
            }{' '}
            Km
            <br />
            <FormattedMessage {...messages.excentricite} />
            {
              props.launch.rocket.second_stage.payloads[0].orbit_params
                .eccentricity
            }
            <br />
            <FormattedMessage {...messages.periastre} />
            {
              props.launch.rocket.second_stage.payloads[0].orbit_params
                .periapsis_km
            }{' '}
            Km
            <br />
            <FormattedMessage {...messages.apoapsis} />
            {
              props.launch.rocket.second_stage.payloads[0].orbit_params
                .apoapsis_km
            }{' '}
            Km
            <br />
            <FormattedMessage {...messages.incilaison} />
            {
              props.launch.rocket.second_stage.payloads[0].orbit_params
                .inclination_deg
            }{' '}
            Deg
            <br />
            <FormattedMessage {...messages.period} />
            {
              props.launch.rocket.second_stage.payloads[0].orbit_params
                .period_min
            }
            <br />
            <FormattedMessage {...messages.autonomy} />
            {
              props.launch.rocket.second_stage.payloads[0].orbit_params
                .lifespan_years
            }{' '}
            Année(s)
            <br />
            <FormattedMessage {...messages.epoq} />
            {props.launch.rocket.second_stage.payloads[0].orbit_params.epoch}
            <br />
            <FormattedMessage {...messages.averagemove} />
            {
              props.launch.rocket.second_stage.payloads[0].orbit_params
                .mean_motion
            }
            <br />
            <FormattedMessage {...messages.raan} />
            {props.launch.rocket.second_stage.payloads[0].orbit_params.raan}
            <br />
            <FormattedMessage {...messages.pericentre} />
            {
              props.launch.rocket.second_stage.payloads[0].orbit_params
                .arg_of_pericenter
            }
            <br />
            <FormattedMessage {...messages.anomaly} />
            {
              props.launch.rocket.second_stage.payloads[0].orbit_params
                .mean_anomaly
            }
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
            {props.launch.launch_success ? (
              <FormattedMessage {...messages.true} />
            ) : (
              <FormattedMessage {...messages.false} />
            )}
            <br />
            <FormattedMessage {...messages.launchproblem} />
            <br />
            <FormattedMessage {...messages.time} />
            {!props.launch.launch_success ? (
              `${props.launch.launch_failure_details.time}min`
            ) : (
              <div />
            )}
            <br />
            <FormattedMessage {...messages.reason} />
            {!props.launch.launch_success ? (
              props.launch.launch_failure_details.reason
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
          <Typography>{props.launch.details}</Typography>
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
              {props.launch.links.mission_patch ? (
                <span>
                  <a target="_blank" href={props.launch.links.mission_patch}>
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
              {props.launch.links.reddit_campaign ? (
                <span align="center" width="200px">
                  <a target="_blank" href={props.launch.links.reddit_campaign}>
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
              {props.launch.links.reddit_launch ? (
                <span align="center" width="200px">
                  <a target="_blank" href={props.launch.links.reddit_launch}>
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
              {props.launch.links.reddit_recovery ? (
                <span align="center" width="200px">
                  <a target="_blank" href={props.launch.links.reddit_recovery}>
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
              {props.launch.links.reddit_media ? (
                <div align="center" width="12%">
                  <a target="_blank" href={props.launch.links.reddit_media}>
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
              {props.launch.links.presskit ? (
                <div align="center" width="12%">
                  <a target="_blank" href={props.launch.links.presskit}>
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
              {props.launch.links.article_link ? (
                <div align="center" width="12%">
                  <a target="_blank" href={props.launch.links.article_link}>
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
              {props.launch.links.wikipedia ? (
                <div align="center" width="12%">
                  <a target="_blank" href={props.launch.links.wikipedia}>
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
              {props.launch.telemetry.flight_club ? (
                <div align="center" width="12%">
                  <a target="_blank" href={props.launch.telemetry.flight_club}>
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
            pictures={props.launch.links.flickr_images}
            name={props.launch.mission_name}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
