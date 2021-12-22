const getSearchParams = () => new URLSearchParams(window.location.search);

const getQuery = () => {
    const query = {};
    [...getSearchParams().entries()].forEach(([key, val]) => {
        query[key] = val;
    });
    return query;
}

export {
    getQuery,
    getSearchParams
};