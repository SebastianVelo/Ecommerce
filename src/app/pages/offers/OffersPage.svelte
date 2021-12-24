<script>
    import FilterService from "../../../services/filter/FilterService";
    import OfferService from "../../../services/offer/OfferService";
    import Searchbar from "./searchbar/Searchbar.svelte";
    import getOfferCard from "../../usecases/offer-card/getOfferCard";
    import { getQuery } from "../../usecases/params/getParams";
    import OfferCard from "./offer-card/OfferCard.svelte";
    import style from "./styles";

    let offers = OfferService.search(getQuery());
    let models = offers.results.map(getOfferCard);
    let filterGroups = FilterService.getFilterGroups();

    const update = () => {
        offers = OfferService.search(getQuery());
        models = offers.results.map(getOfferCard);
    };
</script>

<div class={style.page.get}>
    <Searchbar
        {filterGroups}
        pagination={{
            show: models.length,
            pages: offers.pages,
        }}
        onFilter={update}
    />
    <section class={style.page.main.get}>
        <div class={style.page.main.offers.get}>
            {#each models as model}
                <OfferCard {model} />
            {/each}
            {#if !models.length}
                <div class="h-96 overflow-hidden text-center">
                    <p class="text-primary-light text-3xl">
                        There are no offers with this criteria 😔 Try another
                        one!
                    </p>
                </div>
            {/if}
        </div>
    </section>
</div>
