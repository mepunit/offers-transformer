import { Offer1, Offer2 } from "../../../types";
import { instanceOfOffer1Payload, instanceOfOffer2Payload } from '../../../utils/type-checker';
import * as Offer1Template from './offer1';
import * as Offer2Template from './offer2';

const transformTemplate = (offer: Offer1.Payload | Offer2.Payload): any => {
    if (instanceOfOffer1Payload(offer)) {
        return Offer1Template.default;
    }
    if (instanceOfOffer2Payload(offer)) {
        return Offer2Template.default;
    }
};

export {
    transformTemplate
};