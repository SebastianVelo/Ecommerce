<script>
    import Section from "./shared/section/Section.svelte";
    import SectionList from "./shared/section-list/SectionList.svelte";
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
        <SectionList
            title={model.requirements.title}
            items={model.requirements.data.items}
        />
        <SectionList
            title={model.niceToHave.title}
            items={model.niceToHave.data.items}
        />
    </div>
    <SectionList
        title={model.benefits.title}
        items={model.benefits.data.items}
    />
</div>
