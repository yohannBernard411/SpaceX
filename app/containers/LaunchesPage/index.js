import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import CollapsibleLaunchesTable from 'components/DisplayLaunches/CollapsibleLaunchesTable';
import messages from './messages';

const myHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});

const init = {
  method: 'GET',
  headers: myHeader,
  mode: 'cors',
};

export default class LaunchesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: null,
    };
  }

  componentDidMount = () => {
    const url = 'https://api.spacexdata.com/v3/launches';
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        console.log(`data: ${data[0].mission_name}`);
        this.setState({
          launches: data,
        });
      })
      .catch(error => console.log(`Erreur de json: ${error}`))
      .catch(error => console.log(`Erreur de fetch: ${error}`));
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>LaunchesPage</title>
          <meta name="description" content="All the launches by SpaceX" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        <CollapsibleLaunchesTable launches={this.state.launches} />
      </div>
    );
  }
}
