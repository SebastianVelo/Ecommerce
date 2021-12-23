<script>
    import LanguageFilter from "./lang-filter/LanguageFilter.svelte";
    import Search from "./search/Search.svelte";
    import SeniorityFilter from "./seniority-filter/SeniorityFilter.svelte";
    export let search;
</script>

<div class={"px-4 py-2 space-y-4 flex flex-col lg:space-y-0 items-start"}>
    <div class={`flex justify-between flex-col lg:flex-row w-full`}>
        <SeniorityFilter />
        <LanguageFilter />
    </div>
    <Search {search} />
</div>
