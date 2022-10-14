import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OfferModule } from './offer/offer.module';
import configuration from './config/configuration';
import { OfferService } from './offer/offer.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    OfferModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
