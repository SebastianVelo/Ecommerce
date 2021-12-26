<script>
    import OfferDetail from "./offer-detail/OfferDetail.svelte";
    import style from "./styles";
    import OfferDetailPageService from "../../services/pages/offer/OfferDetailPageService";
    import Messages from "../../components/list/Messages.svelte";

    export let id;

    const page = OfferDetailPageService.get(id);
</script>

<div class={style.page.get}>
    {#if page.offer}
        <section class={style.page.main.get}>
            <OfferDetail model={page.offer} />
        </section>
    {/if}
    <Messages messages={page.messages} />
</div>
