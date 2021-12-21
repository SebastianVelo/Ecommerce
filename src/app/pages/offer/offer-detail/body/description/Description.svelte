<script>
    import Section from "../shared/section/Section.svelte";
    export let model;
</script>

<Section title={model.title}>
    <div>
        {model.data.description}
    </div>
</Section>
