class QueryService {

    static getSearchParams() {
        return new URLSearchParams(window.location.search);
    }

    static getOffersQuery(companyId) {
        const query = { companyId };
        const entries = QueryService.getSearchParams().entries();
        [...entries].forEach(([key, val]) => {
            query[key] = val;
        });
        return query;
    }

    static isActive(property, value) {
        return !QueryService.getSearchParams().get(property) || QueryService.getSearchParams().get(property) === value;
    }
}

export default QueryService;