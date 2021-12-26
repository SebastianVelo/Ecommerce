import OfferService from "../../api/OfferService";
import OfferDetailService from "../../components/offer-detail/OfferDetailService";

class OfferDetailPageService {

    static get(id) {
        const offer = OfferService.getById(id);
        return {
            offer: offer && OfferDetailService.get(offer),
            errorMsgs: {
                notFound: "This offer does not exist anymore 😔 (or maybe it never existed 👀) Try another one!",
            }
        }
    }
}

export default OfferDetailPageService;