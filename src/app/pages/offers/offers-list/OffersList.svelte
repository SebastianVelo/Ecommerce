<script>
    import OfferCard from "./offer-card/OfferCard.svelte";
    export let offers;
    export let style;
</script>

<div class={style.get}>
    {#each offers as model}
        <OfferCard {model} />
    {/each}
</div>
