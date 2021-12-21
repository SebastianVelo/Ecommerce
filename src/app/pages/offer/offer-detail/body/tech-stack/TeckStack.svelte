<script>
    import Section from "../shared/section/Section.svelte";
    import Skill from "./skill/Skill.svelte";

    export let model;
</script>

<Section title={model.title}>
    <div class="grid-cols-4">
        {#each model.data.skills as skill}
            <Skill {skill} />
        {/each}
    </div>
</Section>
