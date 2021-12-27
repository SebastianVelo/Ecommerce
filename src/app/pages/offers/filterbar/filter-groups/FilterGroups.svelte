<script>
    import Filters from "./filters/Filters.svelte";
    export let filterGroups;
    export let filter;
</script>

<div class={`flex justify-between flex-col lg:flex-row w-full px-4`}>
    {#each filterGroups as filterGroup}
        <Filters {...filterGroup} {filter} />
    {/each}
</div>
