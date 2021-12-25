<script>
    import Section from "./shared/section/Section.svelte";
    import Skill from "./shared/skill/Skill.svelte";
    export let model;
    export let style;
</script>

<div class={style.get}>
    <Section title={model.techStack.title}>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            {#each model.techStack.data.skills as skill}
                <Skill {skill} />
            {/each}
        </div>
    </Section>
    <Section title={model.description.title}>
        <div>
            {model.description.data.description}
        </div>
    </Section>
    <div class="grid lg:grid-cols-2 gap-x-4 gap-y-4">
        <Section title={model.requirements.title}>
            <ul>
                {#each model.requirements.data.items as item}
                    <li>• {item}</li>
                {/each}
            </ul>
        </Section>
        <Section title={model.niceToHave.title}>
            <ul>
                {#each model.niceToHave.data.items as item}
                    <li>• {item}</li>
                {/each}
            </ul>
        </Section>
    </div>
</div>
