import offers from "../mock/offers";

class OfferService {
    static getAll() {
        return offers;
    }

    static search(query) {
        return OfferService.getAll().filter(offer => OfferService.check(offer, query))
    }

    static check(offer, query) {
        return OfferService.checkLang(offer, query.lang) && OfferService.checkSeniority(offer, query.seniority) && OfferService.checkSearch(offer, query.query);
    }

    static checkSearch(offer, query) {
        return !query || offer.title.includes(query);
    }

    static checkLang(offer, lang) {
        return !lang || offer.tags.map(t => t.toLowerCase()).includes(lang.toLowerCase());
    }

    static checkSeniority(offer, seniority) {
        return !seniority || offer.seniority.toLowerCase() === seniority.toLowerCase();
    }

    static getById(id) {
        return OfferService.getAll().find(offer => offer.id === id);
    }
}

export default OfferService;