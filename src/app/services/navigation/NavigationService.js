import { navigate } from "svelte-routing";
import QueryService from "../query/QueryService";

class NavigationService {

    static navigateTo(params, callback) {
        navigate(`${window.location.pathname}?${params.toString()}`);
        callback();
    }

    static filter(property, value, callback) {
        const params = QueryService.getSearchParams();
        params.get(property) === value
            ? params.delete(property)
            : params.set(property, value);
        params.delete("page");
        NavigationService.navigateTo(params, callback);
        window.location.reload();
    }

    static search(value, callback) {
        const params = QueryService.getSearchParams();
        params.set("query", value);
        NavigationService.navigateTo(params, callback);
    }

    static paginate(page, callback) {
        const params = QueryService.getSearchParams();
        params.set("page", page);
        NavigationService.navigateTo(params, callback);
    }
}

export default NavigationService;