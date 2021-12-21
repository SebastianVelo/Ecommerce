<script>
    import Section from "../shared/section/Section.svelte";
    import Skill from "./skill/Skill.svelte";

    export let skills = [];
</script>

<Section title="Tech stack">
    <div class="grid-cols-4">
        {#each skills as skill}
            <Skill {skill} />
        {/each}
    </div>
</Section>
