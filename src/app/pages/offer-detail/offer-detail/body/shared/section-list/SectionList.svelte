<script>
    import Section from "../section/Section.svelte";

    export let title;
    export let items;
</script>

<Section {title}>
    <ul>
        {#each items as item}
            <li>• {item}</li>
        {/each}
    </ul>
</Section>
