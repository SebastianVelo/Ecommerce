<script>
    import Description from "./description/Description.svelte";
    import TechStack from "./tech-stack/TeckStack.svelte";
    export let model;
    export let style;
</script>

<div class={style.get}>
    <TechStack model={model.techStack} />
    <Description model={model.description} />
</div>
