import { Offer1, Offer2, IOffer, OfferBoxSizeEnum } from "../../types";
import { instanceOfOffer1Payload, instanceOfOffer2Payload } from "../type-checker";

const transformOffer1 = (offer1Payload: Offer1.Payload) => {
    const output: IOffer = {
        name: offer1Payload.offer_name,
        description: offer1Payload.offer_desc,
        requirements: offer1Payload.call_to_action,
        thumbnail: offer1Payload.image_url,
        boxSize: OfferBoxSizeEnum.SMALL,
        isDesktop: (offer1Payload.platform === "mobile") ? 0 : 1,
        isAndroid: offer1Payload.device.split("_").find((deviceType) => deviceType.match("android")) ? 1 : 0,
        isIos: offer1Payload.device.split("_").find((deviceType) => deviceType.match("iphone")) ? 1 : 0,
        offerUrlTemplate: offer1Payload.offer_url,
        providerName: "offer1",
        externalOfferId: offer1Payload.offer_id,
        slug: ""
    };

    return output;
}

const transformOffer2 = (offer2Payload: Offer2.Payload) => {
    let output: IOffer = {
        name: offer2Payload.Offer.name,
        description: offer2Payload.Offer.description,
        requirements: offer2Payload.Offer.instructions,
        boxSize: OfferBoxSizeEnum.SMALL,
        isDesktop: offer2Payload.OS.web ? 1 : 0,
        isAndroid: offer2Payload.OS.android ? 1 : 0,
        isIos: offer2Payload.OS.ios ? 1 : 0,
        offerUrlTemplate: offer2Payload.Offer.tracking_url,
        providerName: "offer2",
        externalOfferId: offer2Payload.Offer.campaign_id.toString(),
        slug: "",
        thumbnail: ""
    };

    return output;
}

const transformOffer = (offer: Offer1.Payload | Offer2.Payload) => {
    if (instanceOfOffer1Payload(offer)) {
        return transformOffer1(offer);
    }
    if (instanceOfOffer2Payload(offer)) {
        return transformOffer2(offer);
    }
}

export {
    transformOffer,
};