<script>
    import NavigationService from "../../../services/navigation/NavigationService";
    import FilterGroups from "./filter-groups/FilterGroups.svelte";
    import Search from "./search/Search.svelte";

    export let model;
    export let onFilter;
    export let style;

    let { filterGroups } = model;
</script>

<section class={style.get}>
    <Search search={(query) => NavigationService.search(query, onFilter)} />
    <FilterGroups
        {filterGroups}
        filter={(property, value) =>
            NavigationService.filter(property, value, onFilter)}
    />
</section>
