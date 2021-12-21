<script>
    import { Route } from "svelte-navigator";

    export let main;
</script>

<main class="bg-gray-800 h-screen">
    {#each main.pages as route}
        <Route {...route} />
    {/each}
</main>
