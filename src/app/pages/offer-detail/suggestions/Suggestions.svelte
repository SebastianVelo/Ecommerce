<script>
    import OfferCards from "../../../components/list/offer-cards/OfferCards.svelte";

    export let style;
    export let model;
</script>

<div class={style.get}>
    {#each model as suggestion}
        <div class={style.suggestion.get}>
            <h3 class={style.suggestion.title.get}>
                {suggestion.title}
            </h3>
            <OfferCards
                style={style.suggestion.offersList}
                models={suggestion.offersList}
            />
        </div>
    {/each}
</div>
