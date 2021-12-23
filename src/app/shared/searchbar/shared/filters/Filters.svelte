<script>
    import Ball from "../ball/Ball.svelte";

    export let filters;
    export let style;
</script>

<div class={style}>
    {#each filters as filter}
        <Ball {...filter} />
    {/each}
</div>
