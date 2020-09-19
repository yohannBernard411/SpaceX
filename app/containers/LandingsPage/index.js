import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import CollapsibleLandingsTable from 'components/DisplayLandings/CollapsibleLandingsTable';
import Alert from '@material-ui/lab/Alert';
import messages from './messages';

const myHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});

const init = {
  method: 'GET',
  headers: myHeader,
  mode: 'cors',
};

export default class LandingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landings: null,
    };
  }

  componentDidMount = () => {
    const url = 'https://api.spacexdata.com/v3/landpads';
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({
          landings: data,
        });
      })
      .catch(error => (
        <Alert severity="warning">Erreur de json: ${error}</Alert>
      ))
      .catch(error => (
        <Alert severity="warning">Erreur de fetch: ${error}</Alert>
      ));
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>LandingsPage</title>
          <meta name="description" content="All the landings pads of SpaceX" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <CollapsibleLandingsTable landings={this.state.landings} />
      </div>
    );
  }
}
