import OfferService from "../../api/OfferService";
import OfferDetailService from "../../components/offer-detail/OfferDetailService";
import OfferCardService from "../../components/offer-card/OfferCardService";

class OfferDetailPageService {

    static getOffers(query) {
        const offers = OfferService.search(query);
        const models = offers.results.map(OfferCardService.get);
        return models;
    }

    static getOffersByCompany(offer) {
        return {
            title: `More of ${offer.company.name}`,
            offersList: OfferDetailPageService.getOffers({
                companyId: offer.company.name,
                size: 15
            }),
        }
    }

    static getMoreLikeThis(offer) {
        return {
            title: `More like this`,
            offersList: OfferDetailPageService.getOffers({
                seniority: offer.seniority,
                size: 15
            }),
        }
    }

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
            suggestions: [
                OfferDetailPageService.getMoreLikeThis(offer),
                OfferDetailPageService.getOffersByCompany(offer),
            ]
        }
    }
}

export default OfferDetailPageService;