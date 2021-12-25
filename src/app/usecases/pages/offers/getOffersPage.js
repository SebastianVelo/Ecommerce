import OfferService from "../../../../services/offer/OfferService";
import FilterService from "../../../../services/filter/FilterService";
import { getQuery } from "../../../usecases/params/getParams";
import getOfferCard from "../../../usecases/offer-card/getOfferCard";

const getOffersPage = () => {
    let offers = OfferService.search(getQuery());
    let models = offers.results.map(getOfferCard);
    return {
        offers: {
            ...offers,
            models: models ?? []
        },
        notFound: "There are no offers with this criteria 😔 Try another one!",
        filterGroups: FilterService.getFilterGroups(),
    }
};

export default getOffersPage;