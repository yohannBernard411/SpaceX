import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import CollapsibleTable from 'components/DisplayCapsules/CollapsibleTableCapsules';
import messages from './messages';

const myHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});

const init = {
  method: 'GET',
  headers: myHeader,
  mode: 'cors',
};

export default class CapsulesPage extends React.Component {
  constructor(props) {
    super(props),
    (this.state = {
      capsules: [],
    });
  }

  componentDidMount = () => {
    const url = 'https://api.spacexdata.com/v3/capsules';
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({
          capsules: data,
        });
      })
      .catch(error => console.log(`erreur de json:${error}`))
      .catch(error => console.log(`erreur de fetch: ${error}`));
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Capsules</title>
          <meta name="description" content="List of all SpaceX capsules" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        <CollapsibleTable capsules={this.state.capsules} />
      </div>
    );
  }
}
