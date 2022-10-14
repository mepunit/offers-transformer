import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IOffer, OfferBoxSizeEnum } from './types';

export class OfferDto implements IOffer {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    requirements: string;

    @IsString()
    @IsNotEmpty()
    thumbnail: string;

    @IsString()
    @IsNotEmpty()
    boxSize: OfferBoxSizeEnum;

    @IsNumber()
    isDesktop?: number;

    @IsNumber()
    isAndroid?: number;

    @IsNumber()
    isIos?: number;

    @IsString()
    @IsNotEmpty()
    offerUrlTemplate: string;

    @IsString()
    @IsNotEmpty()
    providerName: string;

    @IsString()
    @IsNotEmpty()
    externalOfferId: string;
}