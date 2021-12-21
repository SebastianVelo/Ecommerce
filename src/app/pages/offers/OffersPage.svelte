<script>
    import OfferService from "../../../services/offer/OfferService";
    import Map from "../../shared/map/Map.svelte";
    import getOfferCard from "../../usecases/offer-card/getOfferCard";
    import OfferCard from "./offer-card/OfferCard.svelte";
    import style from "./styles";

    const offers = OfferService.getAll();
    const models = offers.map((o) => getOfferCard(o));
</script>

<div class={style.page.get}>
    <section class={style.page.main.get}>
        <div class={style.page.main.offers.get}>
            {#each models as model}
                <OfferCard {model} />
            {/each}
        </div>
        <Map className={style.page.main.map.get} />
    </section>
</div>
