import offers from "../mock/offers";

class OfferService {
    static getAll() {
        return offers(30);
    }

    static getById(id) {
        return OfferService.getAll().find(offer => offer.id === id);
    }
}

export default OfferService;