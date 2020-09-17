import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Spaceman from './spaceman.png';

const divStyle = {
  paddingTop: '30px',
};

function Header() {
  return (
    <div style={divStyle}>
      <A href="https://www.spacex.com/">
        <Img src={Spaceman} alt="Spaceman" />
      </A>
      <NavBar>
        <div>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/capsules">
            <FormattedMessage {...messages.capsules} />
          </HeaderLink>
          <HeaderLink to="/cores">
            <FormattedMessage {...messages.cores} />
          </HeaderLink>
          <HeaderLink to="/dragons">
            <FormattedMessage {...messages.dragons} />
          </HeaderLink>
          <HeaderLink to="/history">
            <FormattedMessage {...messages.history} />
          </HeaderLink>
        </div>
        <div>
          <HeaderLink to="/landings">
            <FormattedMessage {...messages.landings} />
          </HeaderLink>
          <HeaderLink to="/launches">
            <FormattedMessage {...messages.launches} />
          </HeaderLink>
        </div>
      </NavBar>
    </div>
  );
}

export default Header;
