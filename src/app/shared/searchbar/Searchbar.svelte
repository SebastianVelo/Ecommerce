<script>
    import LanguageFilter from "./lang-filter/LanguageFilter.svelte";
    import Search from "./search/Search.svelte";
    import SeniorityFilter from "./seniority-filter/SeniorityFilter.svelte";
</script>

<div class={"px-4 py-4 space-y-4 grid grid-cols-1 lg:grid-cols-4 lg:space-y-0 lg:space-x-8"}>
    <SeniorityFilter />
    <LanguageFilter />
    <Search />
</div>
