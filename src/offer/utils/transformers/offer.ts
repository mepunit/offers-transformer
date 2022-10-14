import { Offer1, Offer2, IOffer } from "../../types";
// A Simple Solution:
// import { transformOffer } from "./simple.offer-item";
// Preferred one:
import { transformOffer } from "./offer-item";
import { instanceOfOffer1Response, instanceOfOffer2Response } from "../type-checker";
import { OfferDto } from "src/offer/offer.dto";

const transformOffers = async (payload: Offer1.Response | Offer2.Response): Promise<Array<IOffer>> => {

    let output: Array<OfferDto> = [];

    if (instanceOfOffer1Response(payload)) {
        for (const offer of payload.response.offers) {
            output.push(await transformOffer(offer));
        }
    }

    if (instanceOfOffer2Response(payload)) {
        for (const offer in payload.data) {
            output.push(await transformOffer(payload.data[offer]));
        }
    }

    return output.filter(val => Boolean(val));
}

export default transformOffers;