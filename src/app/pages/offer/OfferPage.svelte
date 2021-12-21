<script>
    import OfferService from "../../../services/offer/OfferService";
    import Map from "../../shared/map/Map.svelte";
    import OfferDetail from "./offer-detail/OfferDetail.svelte";
    import style from "./styles";

    export let id;

    const offer = OfferService.getById(id);
</script>

<div class={style.page.get}>
    <section class={style.page.main.get}>
        <OfferDetail {offer} />
        <Map className={style.page.main.map.get} />
    </section>
</div>
