import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { offerProviders } from './offer.providers';
import { OfferService } from './offer.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...offerProviders,
    OfferService,
  ],
  exports:[OfferService]
})
export class OfferModule {}