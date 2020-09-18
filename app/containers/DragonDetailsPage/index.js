import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import SimpleAccordionDragon from 'components/DragonAccordion/SimpleAccordionDragon';
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
      .catch(error => console.log(`Erreur de json: ${error}`))
      .catch(error => console.log(`Erreur de fetch: ${error}`));
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
            console.log('pas encore de dragon!')
          )}
        </H1>

        {this.state.dragon ? (
          <SimpleAccordionDragon dragon={this.state.dragon} />
        ) : (
          console.log('pas encore de dragon!')
        )}
      </div>
    );
  }
}
