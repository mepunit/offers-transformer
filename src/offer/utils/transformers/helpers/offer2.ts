import { Offer2, OfferBoxSizeEnum } from "../../../types";
import { slugify } from "../../helper";

export default {
    name: 'Offer.name',
    slug: (data) => slugify(data.Offer.name),
    description: 'Offer.description',
    requirements: 'Offer.instructions',
    offerUrlTemplate: 'Offer.tracking_url',
    boxSize: () => OfferBoxSizeEnum.SMALL,
    providerName: () => 'offer2',
    externalOfferId: (data: Offer2.Payload): string => {
        return data.Offer.campaign_id.toString();
    },
    isDesktop: (data: Offer2.Payload): number => {
        return data.OS.web ? 0 : 1;
    },
    isAndroid: (data: Offer2.Payload): number => {
        return data.OS.android ? 1 : 0;
    },
    isIos: (data: Offer2.Payload): number => {
        return data.OS.ios ? 1 : 0;
    },
};