import OfferService from "../../api/OfferService";
import QueryService from "../../query/QueryService";
import FilterService from "../../filter/FilterService";
import OfferCardService from "../../components/offer-card/OfferCardService";

class OffersPageService {

    static getTitle(companyId) {
        return companyId ? `Jobs at ${companyId}` : "Offers from all companies";
    }

    static getOffers(offers) {
        const models = offers.results.map(OfferCardService.get);
        return {
            ...offers,
            models: models ?? []
        };
    }

    static getTotal(offers) {
        return `${offers.size} ${offers.size > 1 ? "offers" : "offer"}`;
    }

    static getMain(offers) {
        return {
            offers: OffersPageService.getOffers(offers),
            total: OffersPageService.getTotal(offers),
        };
    }

    static getSearchbar(offers, companyId) {
        return {
            filterGroups: FilterService.getFilterGroups(),
            title: OffersPageService.getTitle(companyId),
            pagination: {
                show: offers.results.length && offers.pages > 1,
                pages: offers.pages,
            }
        }
    }

    static getMessages(offers) {
        return [
            {
                message: "There are no offers with this criteria 😔 Try another one!",
                show: !offers.results.length
            }
        ];
    }

    static get(companyId) {
        const query = QueryService.getOffersQuery(companyId);
        const offers = OfferService.search(query);
        return {
            searchbar: OffersPageService.getSearchbar(offers, companyId),
            main: OffersPageService.getMain(offers),
            messages: OffersPageService.getMessages(offers),
        }
    }
}

export default OffersPageService;