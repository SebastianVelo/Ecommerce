<script>
    import Pill from "../../../shared/components/atom/pill/Pill.svelte";
    import Action from "../../../shared/components/atom/action/Action.svelte";
    import style from "./styles";

    export let model;
</script>

<div class={style.card.get}>
    <a href={model.title.path}>
        <img
            class={style.card.image.get}
            src={model.avatar.src}
            alt={model.avatar.alt}
        />
    </a>
    <div class={style.card.wrapper.get}>
        <div class={style.card.wrapper.rowTop.get}>
            <h3 class={style.card.wrapper.rowTop.title.get}>
                <Action type="link" action={model.title} />
            </h3>
            <span class={style.card.wrapper.rowTop.salary.get}
                >{model.salary}</span
            >
        </div>
        <div class={style.card.wrapper.rowBottom.get}>
            <div class={style.card.wrapper.rowBottom.spacedRow.get}>
                <span>{model.company}</span>
                <span>{model.location}</span>
                <Pill color={model.seniority.color}
                    >{model.seniority.label}</Pill
                >
            </div>
            <div class={style.card.wrapper.rowBottom.spacedRow.get}>
                {#each model.tags as tag}
                    <Pill color={tag.color}>{tag.label}</Pill>
                {/each}
            </div>
        </div>
    </div>
</div>
