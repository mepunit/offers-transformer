import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Offer } from './offer.entity';
import { IOffer } from './types/IOffer';
import transformOffers from './utils/transformers/offer';
import { Offer1, Offer2 } from './types';

@Injectable()
export class OfferService {
  constructor(
    @Inject('OFFER_REPOSITORY')
    private offerRepository: Repository<Offer>,
  ) {}

  async findAll(): Promise<Offer[]> {
    return this.offerRepository.find();
  }

  async transformOffers(offers: Offer1.Response|Offer2.Response): Promise<Array<IOffer>> {
    // Offers can be pushed to DB once transformed:
    return await transformOffers(offers);
  }
}