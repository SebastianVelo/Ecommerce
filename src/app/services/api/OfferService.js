import offers from "./mock/offers";

function checkSearch(offer, query) {
    return !query || offer.title.toLowerCase().includes(query.toLowerCase()) || offer.company.name.toLowerCase().includes(query.toLowerCase());
}

function checkLang(offer, lang) {
    return !lang || offer.tags.map(t => t.toLowerCase()).includes(lang.toLowerCase());
}

function checkSeniority(offer, seniority) {
    return !seniority || offer.seniority.toLowerCase() === seniority.toLowerCase();
}

function checkCompany(offer, company) {
    return !company || offer.company.name.toLowerCase() === company.toLowerCase();
}

function check(offer, query) {
    return checkLang(offer, query.lang) && checkSeniority(offer, query.seniority) && checkSearch(offer, query.query) && checkCompany(offer, query.companyId);
}

class OfferService {
    static getAll() {
        return offers;
    }

    static search(query) {
        let { page, size } = query;
        page = page === undefined ? 0 : page - 1;
        size = size ?? 10;
        const data = OfferService.getAll().filter(offer => check(offer, query));
        const results = data.slice(page * size, (page * size) + size);
        return {
            results, page, size: data.length, pages: Math.ceil(data.length / size)
        };
    }

    static getById(id) {
        return OfferService.getAll().find(offer => offer.id === id);
    }
}

export default OfferService;