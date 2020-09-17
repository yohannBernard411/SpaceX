import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import SimpleAccordionLaunch from 'components/LaunchAccordion/SimpleAccordionLaunch';
import messages from './messages';

const myHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});

const init = {
  method: 'GET',
  headers: myHeader,
  mode: 'cors',
};

export default class LauncheDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launcheId: props.match.params.id,
      launche: null,
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
        console.log(`data launcheDetails: ${data}`);
        this.setState({
          launch: data,
        });
      })
      .catch(error => console.log(`Erreur de json: ${error}`))
      .catch(error => console.log(`Erreur de fetch: ${error}`));
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
          console.log('pas encore de launche!')
        )}
      </div>
    );
  }
}
