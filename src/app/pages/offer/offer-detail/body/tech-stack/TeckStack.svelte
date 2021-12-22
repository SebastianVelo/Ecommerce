<script>
    import Section from "../shared/section/Section.svelte";
    import Skill from "./skill/Skill.svelte";

    export let model;
</script>

<Section title={model.title}>
    <div class="grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid">
        {#each model.data.skills as skill}
            <Skill {skill} />
        {/each}
    </div>
</Section>
