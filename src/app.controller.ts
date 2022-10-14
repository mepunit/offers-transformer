import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { OfferService } from './offer/offer.service';
import { payload as offer1SampleData } from './offer1.payload';
import { payload as offer2SampleData } from './offer2.payload';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly offerService: OfferService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/transformOffers")
  async transformOffers() {
    let output = [];

    output.push(
      ...(await this.offerService.transformOffers(offer1SampleData)),
      ...(await this.offerService.transformOffers(offer2SampleData)),
    );

    // Sample Call with 
    return output;
  }
}
