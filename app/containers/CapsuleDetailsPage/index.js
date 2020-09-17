import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import CapsuleAccordion from 'components/CapsuleAccordion/CapsuleAccordion';
import messages from './messages';

const myHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});

const init = {
  method: 'GET',
  headers: myHeader,
  mode: 'cors',
};

export default class CapsuleDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      capsuleId: props.match.params.id,
      capsule: null,
    };
  }

  componentDidMount = () => {
    const url = `https://api.spacexdata.com/v3/capsules/${
      this.state.capsuleId
    }`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({
          capsule: data,
        });
      })
      .catch(error => console.log(`Erreur de json: ${error}`))
      .catch(error => console.log(`Erreur de fetch: ${error}`));
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>CapsuleDetails</title>
          <meta name="description" content="Eplore just one capsule" />
        </Helmet>
        <H1>
          {this.state.capsule ? (
            <FormattedMessage
              {...messages.header}
              values={{ capsule: this.state.capsule.capsule_serial }}
            />
          ) : (
            <div />
          )}
        </H1>
        {this.state.capsule ? (
          <CapsuleAccordion capsule={this.state.capsule} />
        ) : (
          console.log('pas encore de capsule!')
        )}
      </div>
    );
  }
}
