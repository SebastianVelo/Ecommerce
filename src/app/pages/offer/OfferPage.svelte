<script>
    import OfferService from "../../../services/offer/OfferService";
    import Map from "../../shared/map/Map.svelte";
    import getOfferDetail from "../../usecases/offer-detail/getOfferDetail";
    import OfferDetail from "./offer-detail/OfferDetail.svelte";
    import style from "./styles";

    export let id;

    const offer = OfferService.getById(id);
    const model = getOfferDetail(offer);
</script>

<div class={style.page.get}>
    <section class={style.page.main.get}>
        <OfferDetail {model} />
        <Map className={style.page.main.map.get} />
    </section>
</div>
