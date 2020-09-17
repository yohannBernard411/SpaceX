/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.CorePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Details of {core} core',
  },
});
