import { Offer1, OfferBoxSizeEnum } from "../../../types";
import { slugify } from "../../helper";

export default {
    name: 'offer_name',
    slug: (data) => slugify(data.offer_name),
    description: 'offer_desc',
    requirements: 'call_to_action',
    thumbnail: 'image_url',
    offerUrlTemplate: 'offer_url',
    externalOfferId: 'offer_id',
    boxSize: () => OfferBoxSizeEnum.SMALL,
    providerName: () => 'offer1',
    isDesktop: (data: Offer1.Payload): number => {
        return (data.platform === "mobile") ? 0 : 1;
    },
    isAndroid: (data: Offer1.Payload): number => {
        return data.device.split("_").find((deviceType) => deviceType.match("android")) ? 1 : 0;
    },
    isIos: (data: Offer1.Payload): number => {
        return data.device.split("_").find((deviceType) => deviceType.match("iphone")) ? 1 : 0;
    },
};