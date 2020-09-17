import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import SimpleAccordionLanding from 'components/LandingAccordion/SimpleAccordionLanding';
import messages from './messages';

const myHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});

const init = {
  method: 'GET',
  headers: myHeader,
  mode: 'cors',
};

export default class LandingDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landingId: props.match.params.id,
      landing: null,
    };
  }

  componentDidMount = () => {
    const url = `https://api.spacexdata.com/v3/landpads/${
      this.state.landingId
    }`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({
          landing: data,
        });
      })
      .catch(error => console.log(`Erreur de json: ${error}`))
      .catch(error => console.log(`Erreur de fetch: ${error}`));
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>LandingDetailsPage</title>
          <meta name="description" content="Details of one landing pod" />
        </Helmet>
        <H1>
          {this.state.landing ? (
            <FormattedMessage
              {...messages.header}
              values={{ landing: this.state.landing.id }}
            />
          ) : (
            <div />
          )}
        </H1>
        {this.state.landing ? (
          <SimpleAccordionLanding landing={this.state.landing} />
        ) : (
          console.log('pas encore de landing!')
        )}
      </div>
    );
  }
}
