/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import CapsulesPage from 'containers/CapsulesPage/Loadable';
import CapsuleDetailsPage from 'containers/CapsuleDetailsPage/Loadable';
import CoresPage from 'containers/CoresPage/Loadable';
import CoreDetailsPage from 'containers/CoreDetailsPage/Loadable';
import DragonsPage from 'containers/DragonsPage/Loadable';
import DragonDetailsPage from 'containers/DragonDetailsPage/Loadable';
import HistoryPage from 'containers/HistoryPage/Loadable';
import LandingsPage from 'containers/LandingsPage/Loadable';
import LandingDetailsPage from 'containers/LandingDetailsPage/Loadable';
import LaunchesPage from 'containers/LaunchesPage/Loadable';
import LauncheDetailsPage from 'containers/LauncheDetailsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(1200px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - SPACEX" defaultTitle="Space X">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/capsules" component={CapsulesPage} />
        <Route path="/capsulebyid/:id" component={CapsuleDetailsPage} />
        <Route path="/cores" component={CoresPage} />
        <Route path="/corebyid/:id" component={CoreDetailsPage} />
        <Route path="/dragons" component={DragonsPage} />
        <Route path="/dragonbyid/:id" component={DragonDetailsPage} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/landings" component={LandingsPage} />
        <Route path="/landingbyid/:id" component={LandingDetailsPage} />
        <Route path="/launches" component={LaunchesPage} />
        <Route path="/launchebyid/:id" component={LauncheDetailsPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
