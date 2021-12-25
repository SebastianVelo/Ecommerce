<script>
    import { navigate } from "svelte-routing";
    import QueryService from "../../../services/query/QueryService";
    import Pagination from "../../../shared/pagination/Pagination.svelte";
    import FilterGroups from "./filter-groups/FilterGroups.svelte";
    import Search from "./search/Search.svelte";
    export let filterGroups;
    export let pagination;
    export let onFilter;
    export let style;

    const navigateTo = (params) => {
        navigate(`${window.location.pathname}?${params.toString()}`);
        onFilter();
    };

    const filter = (property, value) => {
        const params = QueryService.getSearchParams();
        params.get(property) === value
            ? params.delete(property)
            : params.set(property, value);
        params.delete("page");
        navigateTo(params);
        window.location.reload();
    };

    const search = (val) => {
        const params = QueryService.getSearchParams();
        params.set("query", val);
        navigateTo(params);
    };

    const paginate = (page) => {
        const params = QueryService.getSearchParams();
        params.set("page", page);
        navigateTo(params);
    };
</script>

<div class={style.get}>
    <FilterGroups {filterGroups} {filter} />
    <Search {search} />
    {#if pagination.show && pagination.pages > 1}
        <div class={style.pagination.get}>
            <Pagination
                total={pagination.pages}
                pagesToShow={pagination.pages > 5 ? 5 : pagination.pages}
                onChange={paginate}
            />
        </div>
    {/if}
</div>
