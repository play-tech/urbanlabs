import type { SourceConfig } from '../ingestion/types';

export const farinera: SourceConfig = {
  id: 'miram-farinera',
  name: 'Centre Cultural la Farinera del Clot · Miram',
  listingUrl:
    'https://lafarinera.inscripcionscc.com/MiramModular/buscador/buscador.jsp?g=1&c=20&t=AC',
  institution: {
    id: 'cc-farinera',
    name: 'Centre Cultural la Farinera del Clot',
    url: 'https://farinera.org/',
    city: 'Barcelona',
    cityId: 'barcelona',
    country: 'ES',
    address: 'Gran Via de les Corts Catalanes, 837, 08018 Barcelona',
    timezone: 'Europe/Madrid',
  },
};
