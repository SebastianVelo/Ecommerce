<script>
    import Messages from "../../components/list/messages/Messages.svelte";
    import OfferDetailPageService from "../../services/pages/offer/OfferDetailPageService";
    import Suggestions from "./suggestions/Suggestions.svelte";
    import OfferDetail from "./offer-detail/OfferDetail.svelte";
    import style from "./styles";

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
    <Suggestions model={page.suggestions} style={style.page.suggestions} />
</div>
