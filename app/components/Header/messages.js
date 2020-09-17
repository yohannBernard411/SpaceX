/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Accueil',
  },
  capsules: {
    id: `${scope}.capsules`,
    defaultMessage: 'Capsules',
  },
  cores: {
    id: `${scope}.cores`,
    defaultMessage: 'Moteurs',
  },
  dragons: {
    id: `${scope}.dragons`,
    defaultMessage: 'Dragons',
  },
  history: {
    id: `${scope}.history`,
    defaultMessage: 'Histoire',
  },
  landings: {
    id: `${scope}.landings`,
    defaultMessage: 'Attérissages',
  },
  launches: {
    id: `${scope}.launches`,
    defaultMessage: 'Lancements',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
});
