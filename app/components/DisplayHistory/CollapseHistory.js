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
import Button from 'components/Button';
import DesactivedButton from 'components/DesactivedButton';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
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
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="center">{row.title}</TableCell>

        <TableCell align="right">
          {new Date(row.event_date_utc).getDate()} -{' '}
          {new Date(row.event_date_utc).getMonth() + 1} -{' '}
          {new Date(row.event_date_utc).getYear() + 1900}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                <FormattedMessage {...messages.history} />
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <FormattedMessage {...messages.flight} />
                      {row.flight_number}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan="3">
                      <FormattedMessage {...messages.abstract} />
                      {row.details}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left" width="30%">
                      {row.links.reddit ? (
                        <a target="_blank" href={row.links.reddit}>
                          <Button>Reddit</Button>
                        </a>
                      ) : (
                        <DesactivedButton>Reddit</DesactivedButton>
                      )}
                    </TableCell>
                    <TableCell align="center" width="30%">
                      {row.links.wikipedia ? (
                        <a target="_blank" href={row.links.wikipedia}>
                          <Button>Wikipedia</Button>
                        </a>
                      ) : (
                        <DesactivedButton>Wikipedia</DesactivedButton>
                      )}
                    </TableCell>
                    <TableCell align="right" width="30%">
                      {row.links.article ? (
                        <a target="_blank" href={row.links.article}>
                          <Button>Article</Button>
                        </a>
                      ) : (
                        <DesactivedButton>Article</DesactivedButton>
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

GridDragons.propTypes = {
  title: PropTypes.array,
  event_date_utc: PropTypes.string,
  flight_number: PropTypes.string,
  details: PropTypes.string,
  links: PropTypes.object,
  reddit: PropTypes.string,
  article: PropTypes.string,
  wikipedia: PropTypes.string,
};

export default function CollapseHistory(props) {
  return (
    <TableContainer component={Paper} style={topSpace}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <FormattedMessage {...messages.num} />
            </TableCell>
            <TableCell align="center">
              <FormattedMessage {...messages.events} />
            </TableCell>
            <TableCell align="right">
              <FormattedMessage {...messages.date} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.history.map(row => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CollapseHistory.propTypes = {
  history: PropTypes.array,
};
