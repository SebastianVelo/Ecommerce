import OfferService from "../../api/OfferService";
import OfferDetailService from "../../components/offer-detail/OfferDetailService";

class OfferDetailPageService {

    static get(id) {
        const offer = OfferService.getById(id);
        return {
            offer: OfferDetailService.get(offer)
        }
    }
}

export default OfferDetailPageService;