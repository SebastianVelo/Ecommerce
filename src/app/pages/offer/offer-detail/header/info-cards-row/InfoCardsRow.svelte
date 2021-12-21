<script>
    import InfoCard from "./info-card/InfoCard.svelte";

    export let model;
    export let style;
</script>

<div class={style.get}>
    <InfoCard key={"Company name"} value={model.contractor.name} />
    <InfoCard key={"Company size"} value={model.contractor.employees} />
    <InfoCard key={"EXP. lvl"} value={model.seniority} />
    <InfoCard key={"Added"} value={model.createdDays} />
</div>
