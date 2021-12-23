<script>
    import { Route } from "svelte-navigator";

    export let main;
</script>

<main class="">
    {#each main.pages as route}
        <Route {...route} />
    {/each}
</main>
