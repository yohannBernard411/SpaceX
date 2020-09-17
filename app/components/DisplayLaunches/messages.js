import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.DisplayLaunches';

export default defineMessages({
  flight: {
    id: `${scope}.flight`,
    defaultMessage: 'N° of flight',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name',
  },
  date: {
    id: `${scope}.date`,
    defaultMessage: 'Date',
  },
  abstract: {
    id: `${scope}.abstract`,
    defaultMessage: 'Abstract',
  },
  none: {
    id: `${scope}.none`,
    defaultMessage: 'None',
  },
});
