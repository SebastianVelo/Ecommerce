<script>
    import InfoCard from "./info-card/InfoCard.svelte";

    export let model;
    export let style;
</script>

<div class={style.get}>
    {#each model.cards as card}
        <InfoCard {...card} />
    {/each}
</div>
