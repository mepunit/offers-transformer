import { DataSource } from 'typeorm';
import { Offer } from './offer.entity';

export const offerProviders = [
  {
    provide: 'OFFER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Offer),
    inject: ['DATA_SOURCE'],
  },
];