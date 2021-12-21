<script>
    import OfferService from "../../../services/offer/OfferService";
    import OfferCard from "./offer-card/OfferCard.svelte";
    import Map from "../../shared/map/Map.svelte";
    import style from "./styles";

    const offers = OfferService.getAll();
</script>

<div class={style.page.get}>
    <section class={style.page.main.get}>
        <div class={style.page.main.offers.get}>
            {#each offers as offer}
                <OfferCard {offer} />
            {/each}
        </div>
        <Map className={style.page.main.map.get} />
    </section>
</div>
