<script>
    import { navigate } from "svelte-routing";
    import { getSearchParams } from "../../../usecases/params/getParams";
    import Search from "./search/Search.svelte";
    import Pagination from "../../../shared/pagination/Pagination.svelte";
    import FilterGroups from "./filter-groups/FilterGroups.svelte";
    export let filterGroups;
    export let pagination;
    export let onFilter;

    const navigateTo = (params) => {
        navigate(`/offers?${params.toString()}`);
        onFilter();
    };

    const search = (val) => {
        const params = getSearchParams();
        params.set("query", val);
        navigateTo(params);
    };

    const filter = (property, value) => {
        const params = getSearchParams();
        params.get(property) === value
            ? params.delete(property)
            : params.set(property, value);
        params.delete("page");
        navigateTo(params);
        window.location.reload();
    };

    const paginate = (page) => {
        const params = getSearchParams();
        params.set("page", page);
        navigateTo(params);
    };
</script>

<div class={"px-4 py-2 space-y-4 flex flex-col lg:space-y-0 items-start"}>
    <FilterGroups {filterGroups} {filter} />
    <Search {search} />
    <div class="pb-4 flex justify-center w-full">
        {#if pagination.show}
            <Pagination
                total={pagination.pages}
                pagesToShow={pagination.pages > 5 ? 5 : pagination.pages}
                onChange={paginate}
            />
        {/if}
    </div>
</div>
