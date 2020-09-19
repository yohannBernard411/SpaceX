import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import CollapseHistory from 'components/DisplayHistory/CollapseHistory';
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

export default class HistoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: null,
    };
  }

  componentDidMount = () => {
    const url = 'https://api.spacexdata.com/v3/history';
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({
          history: data,
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
          <title>HistoryPage</title>
          <meta name="description" content="History of SpaceX" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        {this.state.history ? (
          <CollapseHistory history={this.state.history} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
