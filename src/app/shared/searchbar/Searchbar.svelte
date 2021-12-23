<script>
    import LanguageFilter from "./lang-filter/LanguageFilter.svelte";
    import Search from "./search/Search.svelte";
    import SeniorityFilter from "./seniority-filter/SeniorityFilter.svelte";
</script>

<div class={"px-4 py-2 space-y-4 grid grid-cols-1 lg:grid-cols-4 lg:space-y-0"}>
    <SeniorityFilter />
    <LanguageFilter />
    <Search />
</div>
