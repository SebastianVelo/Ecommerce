<script>
    import OfferService from "../../../services/offer/OfferService";
    import Map from "../../shared/map/Map.svelte";
    import Searchbar from "../../shared/searchbar/Searchbar.svelte";
    import getOfferCard from "../../usecases/offer-card/getOfferCard";
    import { getQuery } from "../../usecases/params/getParams";
    import OfferCard from "./offer-card/OfferCard.svelte";
    import style from "./styles";

    const offers = OfferService.search(getQuery());
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
        <Map className={style.page.main.map.get} longitude={300} latitude={30} />
    </section>
</div>
