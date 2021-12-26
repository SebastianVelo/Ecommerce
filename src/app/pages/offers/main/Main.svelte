<script>
    import OfferCards from "../../../components/list/offer-cards/OfferCards.svelte";
    import Pagination from "../../../components/pagination/Pagination.svelte";
    import NavigationService from "../../../services/navigation/NavigationService";

    export let style;
    export let model;
    export let onChange;
</script>

<section class={style.get}>
    <h2 class={style.title.get}>{model.title}</h2>
    <div class={style.paginationWrapper.get}>
        {#if model.pagination.show && model.pagination.total > 1}
            <div class={style.paginationWrapper.pagination.get}>
                <Pagination
                    {...model.pagination}
                    onChange={(page) =>
                        NavigationService.paginate(page, onChange)}
                />
            </div>
        {/if}
        <p class={style.paginationWrapper.total.get}>
            {model.total}
        </p>
    </div>
    <OfferCards models={model.offers.models} style={style.offersList} />
</section>
