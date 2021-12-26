<script>
    import OfferCard from "../../offer-card/OfferCard.svelte";
    export let models;
    export let style;
</script>

<div class={style.get}>
    {#each models as model}
        <OfferCard {model} style={style.card} />
    {/each}
</div>
