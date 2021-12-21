import getOfferDetailHeader from "./header/getOfferDetailHeader";
import getOfferDetailBody from "./body/getOfferDetailBody";
import getOfferDetailFooter from "./footer/getOfferDetailFooter";

const getOfferDetail = (offer) => ({
    header: getOfferDetailHeader(offer),
    body: getOfferDetailBody(offer),
    footer: getOfferDetailFooter(offer)
});

export default getOfferDetail;