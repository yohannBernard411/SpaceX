import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import GridDragons from 'components/DisplayDragons/GridDragons';
import messages from './messages';

const myHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});

const init = {
  method: 'GET',
  headers: myHeader,
  mode: 'cors',
};

export default class DragonsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragons: null,
    };
  }

  componentDidMount = () => {
    const url = 'https://api.spacexdata.com/v3/dragons';
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({
          dragons: data,
        });
      })
      .catch(error => console.log(`Erreur de json: ${error}`))
      .catch(error => console.log(`Erreur de fetch: ${error}`));
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>DragonsPage</title>
          <meta name="description" content="All dragons of SpaceX" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        {this.state.dragons ? (
          <GridDragons dragons={this.state.dragons} />
        ) : (
          console.log('pas encore de dragons!')
        )}
      </div>
    );
  }
}
