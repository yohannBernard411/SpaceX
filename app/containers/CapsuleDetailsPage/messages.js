/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.CapsuleDetailsPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Détails de la capsule {capsule}',
  },
});
