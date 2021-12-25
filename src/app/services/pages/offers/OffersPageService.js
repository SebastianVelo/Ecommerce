import OfferService from "../../api/OfferService";
import QueryService from "../../query/QueryService";
import FilterService from "../../filter/FilterService";
import OfferCardService from "../../components/offer-card/OfferCardService";

class OffersPageService {

    static getSearchbar(offers) {
        return {
            filterGroups: FilterService.getFilterGroups(),
            pagination: {
                show: offers.results.length && offers.pages > 1,
                pages: offers.pages,
            }
        }
    }

    static getTitle(companyId) {
        return companyId ? `Jobs at ${companyId}` : "Offers from all companies";
    }

    static getOffers(offers, models) {
        return {
            ...offers,
            models: models ?? []
        };
    }

    static getNotFoundMessage() {
        return "There are no offers with this criteria 😔 Try another one!";
    }

    static get(companyId) {
        const query = QueryService.getOffersQuery(companyId);
        const offers = OfferService.search(query);
        const models = offers.results.map(OfferCardService.get);
        return {
            searchbar: OffersPageService.getSearchbar(offers),
            title: OffersPageService.getTitle(companyId),
            offers: OffersPageService.getOffers(offers, models),
            errorMsgs: {
                notFound: OffersPageService.getNotFoundMessage(),
            }
        }
    }
}

export default OffersPageService;