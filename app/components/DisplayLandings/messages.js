import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.DisplayLandings';

export default defineMessages({
  zone: {
    id: `${scope}.zone`,
    defaultMessage: 'Zone',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name',
  },
  status: {
    id: `${scope}.status`,
    defaultMessage: 'Status',
  },
  type: {
    id: `${scope}.type`,
    defaultMessage: 'Landing type',
  },
  attempted: {
    id: `${scope}.attempted`,
    defaultMessage: 'Landings attempted',
  },
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Landings successful',
  },
});
