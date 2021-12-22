<script>
    import OfferService from "../../../services/offer/OfferService";
    import Map from "../../shared/map/Map.svelte";
    import Searchbar from "../../shared/searchbar/Searchbar.svelte";
    import getOfferCard from "../../usecases/offer-card/getOfferCard";
    import OfferCard from "./offer-card/OfferCard.svelte";
    import style from "./styles";

    const params = new URLSearchParams(window.location.search);
    const query = {};
    [...params.entries()].forEach(([key, val]) => {
        query[key] = val;
    });
    const offers = OfferService.search(query);
    const models = offers.map(getOfferCard);
</script>

<div class={style.page.get}>
    <Searchbar />
    <section class={style.page.main.get}>
        <div class={style.page.main.offers.get}>
            {#each models as model}
                <OfferCard {model} />
            {/each}
        </div>
        <Map className={style.page.main.map.get} />
    </section>
</div>
