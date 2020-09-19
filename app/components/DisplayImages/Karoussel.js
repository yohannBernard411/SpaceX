import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'green',
    textShadow: '1px 1px 13px white',
    fontWeight: 'bold',
  },
  titleBar: {
    background:
      'linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, rgba(0,0,0,0) 100%)',
  },
}));

export default function Karoussel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {props.pictures.map(picture => (
          <GridListTile key={picture}>
            <img src={picture} alt={props.name} />
            <GridListTileBar
              title={props.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <a href={picture}>
                  <IconButton aria-label="starlink">
                    <VisibilityIcon className={classes.title} />
                  </IconButton>
                </a>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Karoussel.propTypes = {
  pictures: PropTypes.string,
  name: PropTypes.string,
};
