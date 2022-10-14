enum OfferBoxSizeEnum {
    SMALL = "small",
    LARGE = "large"
};

interface IOffer {
    name: string,
    slug: string,
    description: string,
    requirements: string,
    thumbnail: string,
    boxSize: OfferBoxSizeEnum,
    isDesktop?: number,
    isAndroid?: number,
    isIos?: number,
    offerUrlTemplate: string,
    providerName: string,
    externalOfferId: string
};

export {
    IOffer,
    OfferBoxSizeEnum
};