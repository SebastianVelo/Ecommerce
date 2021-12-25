<script>
    import getOffersPage from "../../usecases/pages/offers/getOffersPage";
    import OfferCard from "./offer-card/OfferCard.svelte";
    import Searchbar from "./searchbar/Searchbar.svelte";
    import style from "./styles";

    let page = getOffersPage();
    const update = () => {
        page = getOffersPage();
    };
</script>

<div class={style.page.get}>
    <Searchbar
        filterGroups={page.filterGroups}
        pagination={{
            show: page.offers.models.length,
            pages: page.offers.pages,
        }}
        onFilter={update}
    />
    <section class={style.page.main.get}>
        <div class={style.page.main.offers.get}>
            {#each page.offers.models as model}
                <OfferCard {model} />
            {/each}
            {#if !page.offers.models.length}
                <div class="h-96 overflow-hidden text-center">
                    <p class="text-primary-light text-3xl">
                        {page.notFound}
                    </p>
                </div>
            {/if}
        </div>
    </section>
</div>
