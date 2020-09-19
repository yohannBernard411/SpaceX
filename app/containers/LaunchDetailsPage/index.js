import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import SimpleAccordionLaunch from 'components/LaunchAccordion/SimpleAccordionLaunch';
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

export default class LaunchDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launcheId: props.match.params.id,
      launch: null,
    };
  }

  componentDidMount = () => {
    const url = `https://api.spacexdata.com/v3/launches/${
      this.state.launcheId
    }`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({
          launch: data,
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
          <title>LaunchDetailsPage</title>
          <meta name="description" content="Details of one launch" />
        </Helmet>
        <H1>
          {this.state.launch ? (
            <FormattedMessage
              {...messages.header}
              values={{ launch: this.state.launch.mission_name }}
            />
          ) : (
            <div />
          )}
        </H1>
        {this.state.launch ? (
          <SimpleAccordionLaunch launch={this.state.launch} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

LaunchDetailsPage.propTypes = {
  match: PropTypes.object,
};
