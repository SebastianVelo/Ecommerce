<script>
    import ActionsRow from "./actions-row/ActionsRow.svelte";
    import DetailRow from "./detail-row/DetailRow.svelte";
    import InfoCardsRow from "./info-cards-row/InfoCardsRow.svelte";

    export let model;
    export let style;
</script>

<div class={style.get}>
    <ActionsRow {model} style={style.actionsRow} />
    <DetailRow {model} style={style.detailRow} />
    <InfoCardsRow {model} style={style.infoCardsRow} />
</div>
