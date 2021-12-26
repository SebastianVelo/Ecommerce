<script>
    import Messages from "../../components/list/messages/Messages.svelte";
    import OfferDetailPageService from "../../services/pages/offer/OfferDetailPageService";
    import OfferCards from "../../components/list/offer-cards/OfferCards.svelte";
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
    <div class="space-y-2">
        {#each page.suggestions as suggestion}
            <div class="">
                <h3 class="text-xl md:text-3xl text-primary-light px-4 pb-2">
                    {suggestion.title}
                </h3>
                <OfferCards
                    models={suggestion.offersList}
                    style={style.page.suggestions.offersList}
                />
            </div>
        {/each}
    </div>
</div>
