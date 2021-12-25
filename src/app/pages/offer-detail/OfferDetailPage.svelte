<script>
    import OfferDetail from "./offer-detail/OfferDetail.svelte";
    import style from "./styles";
    import OfferDetailPageService from "../../services/pages/offer/OfferDetailPageService";

    export let id;

    const page = OfferDetailPageService.get(id);
</script>

<div class={style.page.get}>
    <section class={style.page.main.get}>
        <OfferDetail model={page.offer} />
    </section>
</div>
