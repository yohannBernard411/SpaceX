import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.DisplayDragons';

export default defineMessages({
  dry_mass_kg: {
    id: `${scope}.dry_mass_kg`,
    defaultMessage: 'Mass dry',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name',
  },
  flight: {
    id: `${scope}.flight`,
    defaultMessage: 'Flight',
  },
  cores: {
    id: `${scope}.cores`,
    defaultMessage: 'Cores',
  },
  status: {
    id: `${scope}.status`,
    defaultMessage: 'Status',
  },
  blocs: {
    id: `${scope}.blocs`,
    defaultMessage: 'Blocs',
  },
  original_launch: {
    id: `${scope}.original_launch`,
    defaultMessage: 'First launch',
  },
  reuse_count: {
    id: `${scope}.reuse_count`,
    defaultMessage: 'Reuse',
  },
  details: {
    id: `${scope}.details`,
    defaultMessage: 'Description',
  },
});
