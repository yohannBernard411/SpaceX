import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
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
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          <NavLink to={`/capsulebyid/${row.capsule_serial}`}>
            {row.capsule_id}
          </NavLink>
        </TableCell>
        <TableCell align="center">{row.status}</TableCell>
        <TableCell align="center">{row.type}</TableCell>
        <TableCell align="center">{row.capsule_serial}</TableCell>
        <TableCell align="center">{row.landings}</TableCell>
        {row.original_launch ? (
          <TableCell align="center">{`${new Date(
            row.original_launch,
          ).getDate()} -
        ${new Date(row.original_launch).getMonth() + 1} - 
        ${new Date(row.original_launch).getYear() + 1900}`}</TableCell>
        ) : (
          <TableCell />
        )}

        <TableCell align="center">{row.reuse_count}</TableCell>
        <TableCell align="center" width="250px">
          {row.details}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                <FormattedMessage {...messages.missions} />
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <FormattedMessage {...messages.name} />
                    </TableCell>
                    <TableCell>
                      <FormattedMessage {...messages.flight} />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.missions.map(mission => (
                    <TableRow key={mission.name}>
                      <TableCell component="th" scope="row">
                        {mission.name}
                      </TableCell>
                      <TableCell>{mission.flight}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.object,
  capsule_serial: PropTypes.string,
  capsule_id: PropTypes.string,
  status: PropTypes.string,
  type: PropTypes.string,
  landings: PropTypes.number,
  original_launch: PropTypes.string,
  reuse_count: PropTypes.number,
  details: PropTypes.string,
  missions: PropTypes.object,
  name: PropTypes.string,
  flight: PropTypes.number,
};

export default function CollapsibleTable(props) {
  return (
    <TableContainer component={Paper} style={topSpace}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <FormattedMessage {...messages.capsules} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.status} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.type} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.capsule_serial} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.landings} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.original_launch} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.reuse_count} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.details} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.capsules.map(row => (
            <Row key={row.capsule_serial} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CollapsibleTable.propTypes = {
  capsules: PropTypes.object,
  capsule_serial: PropTypes.string,
};
