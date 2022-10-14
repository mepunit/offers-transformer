import { OfferDto } from "src/offer/offer.dto";
import { Offer1, Offer2 } from "../../types";
import { getFieldValue } from "../helper";
import { transformTemplate } from './helpers';
import { validate } from 'class-validator';

const transformOffer = async (payload: Offer1.Payload | Offer2.Payload): Promise<OfferDto> => {
    let output = new OfferDto();
    const offerTemplate = transformTemplate(payload);

    for (const fieldName in offerTemplate) {
        const payloadKey = offerTemplate[fieldName];
        
        if (typeof payloadKey === 'string') {
            output[fieldName] = getFieldValue(offerTemplate[fieldName], payload);
        }
        else if (typeof payloadKey === 'function') {
            output[fieldName] = payloadKey(payload);
        }
        // else {
        //     output[fieldName] = offerTemplate[fieldName];
        // }
    }

    const errors = await validate(output);
    if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
        return null;
    } else {
        return output;
    }
};

export {
    transformOffer,
};