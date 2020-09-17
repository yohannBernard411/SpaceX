import React from 'react';
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

const myHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});

const init = {
  method: 'GET',
  headers: myHeader,
  mode: 'cors',
};

function Row(props) {
  const { row } = props;
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell component="th" scope="row" align="left">
          <NavLink to={`/launchebyid/${row.flight_number}`}>
            {row.flight_number}
          </NavLink>
        </TableCell>
        <TableCell align="center">{row.mission_name}</TableCell>
        <TableCell align="center">
          {new Date(row.launch_date_local).getDate()} -{' '}
          {new Date(row.launch_date_local).getMonth() + 1} -{' '}
          {new Date(row.launch_date_local).getYear() + 1900}
        </TableCell>
        <TableCell align="center">
          {row.details ? (
            row.details.substring(0, 50)
          ) : (
            <FormattedMessage {...messages.none} />
          )}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable(props) {
  return (
    <TableContainer component={Paper} style={topSpace}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <FormattedMessage {...messages.flight} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.name} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.date} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.abstract} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.launches
            ? props.launches.map(row => (
              <Row key={row.flight_number} row={row} />
            ))
            : console.log('pas encore de landings!')}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
