import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import SimpleAccordionDragon from 'components/DragonAccordion/SimpleAccordionDragon';
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

export default class DragonDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragonId: props.match.params.id,
      dragon: null,
    };
  }

  componentDidMount = () => {
    const url = `https://api.spacexdata.com/v3/dragons/${this.state.dragonId}`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({
          dragon: data,
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
          <title>DragonDetails</title>
          <meta name="description" content="Charactéristics of Dragon" />
        </Helmet>
        <H1>
          {this.state.dragon ? (
            <FormattedMessage
              {...messages.header}
              values={{ dragon: this.state.dragon.name }}
            />
          ) : (
            <div />
          )}
        </H1>

        {this.state.dragon ? (
          <SimpleAccordionDragon dragon={this.state.dragon} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

DragonDetailsPage.propTypes = {
  match: PropTypes.object,
};
