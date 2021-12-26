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

    static getMain(offers, companyId) {
        return {
            title: OffersPageService.getTitle(companyId),
            total: OffersPageService.getTotal(offers),
            pagination: {
                show: offers.results.length && offers.pages > 1,
                pagesToShow: offers.pages > 5
                    ? 5
                    : offers.pages,
                total: offers.pages,
            },
            offers: OffersPageService.getOffers(offers),
        };
    }

    static getFilterbar() {
        return {
            filterGroups: FilterService.getFilterGroups()
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
            filterbar: OffersPageService.getFilterbar(),
            main: OffersPageService.getMain(offers, companyId),
            messages: OffersPageService.getMessages(offers),
        }
    }
}

export default OffersPageService;