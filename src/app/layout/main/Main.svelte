<script>
    import { Route } from "svelte-navigator";

    export let main;
</script>

<main class="2xl:overflow-y-scroll bg-gray-800 min-h-screen pt-24 sm:pt-16 pb-8 2xl:pb-32">
    {#each main.pages as route}
        <Route {...route} />
    {/each}
</main>
