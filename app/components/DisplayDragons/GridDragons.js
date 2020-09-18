import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 700,
    height: 250,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const topSpace = {
  marginTop: '40px',
};

export default function GridDragons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={topSpace}>
      <GridList cellHeight={180} className={classes.gridList}>
        {props.dragons.map(dragon => (
          <GridListTile key={dragon.id}>
            <img src={dragon.flickr_images[0]} alt={dragon.name} />
            <GridListTileBar
              title={dragon.name}
              subtitle={
                <span>
                  <FormattedMessage {...messages.dry_mass_kg} />
                  {dragon.dry_mass_kg} Kg
                </span>
              }
              actionIcon={
                <NavLink to={`/dragonbyid/${dragon.id}`}>
                  <IconButton
                    aria-label={`info about ${dragon.name}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                </NavLink>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

GridDragons.propTypes = {
  dragons: PropTypes.array,
};
