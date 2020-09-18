import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'solid',
    },
  },
});

const topSpace = {
  marginTop: '40px',
};

function Row(props) {
  const { row } = props;
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell component="th" scope="row" align="left">
          <NavLink to={`/landingbyid/${row.id}`}>{row.id}</NavLink>
        </TableCell>
        <TableCell align="center">{row.full_name}</TableCell>
        <TableCell align="center">{row.status}</TableCell>
        <TableCell align="center">{row.landing_type}</TableCell>
        <TableCell align="center">{row.attempted_landings}</TableCell>
        <TableCell align="center">{row.successful_landings}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.string,
};

export default function CollapsibleTable(props) {
  return (
    <TableContainer component={Paper} style={topSpace}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <FormattedMessage {...messages.zone} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.name} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.status} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.type} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.attempted} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.success} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.landings ? (
            props.landings.map(row => <Row key={row.id} row={row} />)
          ) : (
            <div />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CollapsibleTable.propTypes = {
  landings: PropTypes.object,
  id: PropTypes.string,
};
