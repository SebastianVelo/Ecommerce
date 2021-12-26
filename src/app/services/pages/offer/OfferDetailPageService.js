import OfferService from "../../api/OfferService";
import OfferDetailService from "../../components/offer-detail/OfferDetailService";

class OfferDetailPageService {

    static getMessages(offer) {
        return [
            {
                message: "This offer does not exist anymore 😔 (or maybe it never existed 👀) Try another one!",
                show: !offer
            }
        ];
    }

    static get(id) {
        const offer = OfferService.getById(id);
        return {
            offer: offer && OfferDetailService.get(offer),
            messages: OfferDetailPageService.getMessages(offer),
        }
    }
}

export default OfferDetailPageService;