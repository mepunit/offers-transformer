import { Offer1, Offer2 } from "../types";

const instanceOfOffer1Payload = (object: any): object is Offer1.Payload => {
    return 'offer_id' in object;
}

const instanceOfOffer2Payload = (object: any): object is Offer2.Payload => {
    return 'Offer' in object;
}

const instanceOfOffer1Response = (object: any): object is Offer1.Response => {
    return 'query' in object;
}

const instanceOfOffer2Response = (object: any): object is Offer2.Response => {
    return 'status' in object;
}

export {
    instanceOfOffer1Payload,
    instanceOfOffer2Payload,
    instanceOfOffer1Response,
    instanceOfOffer2Response,
}