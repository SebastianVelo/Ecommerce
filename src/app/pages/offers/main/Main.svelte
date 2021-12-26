<script>
    import OffersList from "./offers-list/OffersList.svelte";
    
    export let style;
    export let model;
</script>

<section class={style.get}>
    <p class={style.total.get}>
        {model.total}
    </p>
    <OffersList models={model.offers.models} style={style.offersList} />
</section>
