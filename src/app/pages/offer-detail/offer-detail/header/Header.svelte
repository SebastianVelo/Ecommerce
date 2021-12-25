<script>
    import ActionsRow from "./actions-row/ActionsRow.svelte";
    import DetailRow from "./detail-row/DetailRow.svelte";
    import InfoCardsRow from "./info-cards-row/InfoCardsRow.svelte";

    export let model;
    export let style;
</script>

<div class={style.get}>
    <ActionsRow model={model.actionsRow} style={style.actionsRow} />
    <DetailRow model={model.detailRow} style={style.detailRow} />
    <InfoCardsRow model={model.infoCardsRow} style={style.infoCardsRow} />
</div>
