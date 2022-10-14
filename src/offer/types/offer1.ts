interface Query {
    pubid: string;
    appid: number;
    country: string;
    platform: string;
}

interface Vertical {
    vertical_id: string;
    vertical_name: string;
}

interface Offer1Payload {
    offer_id: string;
    offer_name: string;
    offer_desc: string;
    call_to_action: string;
    disclaimer: string;
    offer_url: string;
    offer_url_easy: string;
    payout: number;
    payout_type: string;
    amount: number;
    image_url: string;
    image_url_220x124: string;
    countries: string[];
    platform: string;
    device: string;
    category: any;
    last_modified: number;
    preview_url: string;
    package_id: string;
    verticals: Vertical[];
}

interface Response {
    currency_name: string;
    offers_count: number;
    offers: Offer1Payload[];
}

interface Offer1Response {
    query?: Query;
    response?: Response;
}

export {
    Offer1Payload as Payload,
    Offer1Response as Response
};