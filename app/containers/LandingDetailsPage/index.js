import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import SimpleAccordionLanding from 'components/LandingAccordion/SimpleAccordionLanding';
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
          <div />
        )}
      </div>
    );
  }
}

LandingDetailsPage.propTypes = {
  match: PropTypes.object,
};
