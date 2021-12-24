const getSearchParams = () => new URLSearchParams(window.location.search);

const getQuery = () => {
    const query = {};
    [...getSearchParams().entries()].forEach(([key, val]) => {
        query[key] = val;
    });
    return query;
}

const isActive = (property, value) => !getSearchParams().get(property) || getSearchParams().get(property) === value;

export {
    getQuery,
    getSearchParams,
    isActive
};