<script>
    import Ball from "./ball/Ball.svelte";

    export let filters;
    export let filter;
    export let style;

</script>

<div class={style}>
    {#each filters as f}
        <Ball {...f} {filter} />
    {/each}
</div>
