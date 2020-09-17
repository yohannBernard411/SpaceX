/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'SPACE X',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage: 'Découvrir l univers façinant de SAPCE X',
  },
  titleHeader: {
    id: `${scope}.titleHeader`,
    defaultMessage: 'Home',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
