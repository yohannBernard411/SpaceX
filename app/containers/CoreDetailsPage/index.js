import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import SimpleAccordionCore from 'components/CoreAccordion/CoreAccordion';
import messages from './messages';

const myHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});

const init = {
  method: 'GET',
  headers: myHeader,
  mode: 'cors',
};

export default class CoreDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coreId: props.match.params.id,
      core: null,
    };
  }

  componentDidMount = () => {
    const url = `https://api.spacexdata.com/v3/cores/${this.state.coreId}`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({
          core: data,
        });
      })
      .catch(error => console.log(`Erreur de json: ${error}`))
      .catch(error => console.log(`Erreur de fetch: ${error}`));
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>CoreDetails</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
          {this.state.core ? (
            <FormattedMessage
              {...messages.header}
              values={{ core: this.state.core.core_serial }}
            />
          ) : (
            console.log('pas encore de core!')
          )}
        </H1>
        <p>{this.state.capsuleId}</p>
        {this.state.core ? (
          <SimpleAccordionCore core={this.state.core} />
        ) : (
          console.log('pas encore de core!')
        )}
      </div>
    );
  }
}
