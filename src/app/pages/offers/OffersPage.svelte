<script>
    import OffersPageService from "../../services/pages/offers/OffersPageService";
    import OffersList from "./offers-list/OffersList.svelte";
    import Searchbar from "./searchbar/Searchbar.svelte";
    import style from "./styles";

    export let companyId;

    let page = OffersPageService.get(companyId);
    const update = () => {
        page = OffersPageService.get(companyId);
    };
</script>

<div class={style.page.get}>
    <Searchbar
        {...page.searchbar}
        onFilter={update}
        style={style.page.searchbar}
    />
    <section class={style.page.main.get}>
        <p class={style.page.main.total.get}>
            {page.offers.size}
            {page.offers.size > 1 ? "offers" : "offer"}
        </p>
        <OffersList
            offers={page.offers.models}
            style={style.page.main.offersList}
        />
    </section>
    {#if !page.offers.models.length}
        <div class="h-96 text-center">
            <p class="text-primary-light text-3xl">
                {page.errorMsgs.notFound}
            </p>
        </div>
    {/if}
</div>
