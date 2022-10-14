interface Offer {
    campaign_id: number;
    store_id?: any;
    tracking_type: string;
    campaign_vertical: string;
    currency_name_singular: string;
    currency_name_plural: string;
    network_epc: string;
    icon: string;
    name: string;
    tracking_url: string;
    instructions: string;
    disclaimer?: any;
    description: string;
    short_description: string;
    offer_sticker_text_1: string;
    offer_sticker_text_2?: any;
    offer_sticker_text_3?: any;
    offer_sticker_color_1: string;
    offer_sticker_color_2: string;
    offer_sticker_color_3: string;
    sort_order_setting?: any;
    category_1: string;
    category_2?: any;
    amount: number;
    payout_usd: number;
    start_datetime: string;
    end_datetime: string;
    is_multi_reward: boolean;
}

interface US {
    id: number;
    code: string;
    name: string;
}

interface Include {
    US: US;
}

interface Country {
    include: Include;
    exclude: any[];
}

interface State {
    include: any[];
    exclude: any[];
}

interface City {
    include: any[];
    exclude: any[];
}

interface ConnectionType {
    cellular: boolean;
    wifi: boolean;
}

interface Device {
    include: any[];
    exclude: any[];
}

interface OS {
    android: boolean;
    ios: boolean;
    web: boolean;
    min_ios?: any;
    max_ios?: any;
    min_android?: any;
    max_android?: any;
}

interface Offer2Payload {
    Offer: Offer;
    Country: Country;
    State: State;
    City: City;
    Connection_Type: ConnectionType;
    Device: Device;
    OS: OS;
}

interface Offer2Response {
    status?: string;
    data?: any;
}

export {
    Offer2Payload as Payload,
    Offer2Response as Response,
};