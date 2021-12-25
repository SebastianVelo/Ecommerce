<script>
    import { Route } from "svelte-navigator";

    export let main;
</script>

<main class="lg:overflow-y-auto bg-gray-800 min-h-screen pt-16 pb-4">
    {#each main.pages as route}
        <Route {...route} />
    {/each}
</main>
