<script>
    import OfferDetail from "./offer-detail/OfferDetail.svelte";
    import style from "./styles";
    import OfferDetailPageService from "../../services/pages/offer/OfferDetailPageService";

    export let id;

    const page = OfferDetailPageService.get(id);
</script>

<div class={style.page.get}>
    {#if page.offer}
        <section class={style.page.main.get}>
            <OfferDetail model={page.offer} />
        </section>
    {:else}
        <div class="h-96 text-center p-6">
            <p class="text-primary-light text-3xl">
                {page.errorMsgs.notFound}
            </p>
        </div>
    {/if}
</div>
