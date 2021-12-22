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
            <Action type="link" action={model.title} />
            <span class={style.card.wrapper.rowTop.salary.get}
                >{model.salary}</span
            >
        </div>
        <div class={style.card.wrapper.rowBottom.get}>
            <div class={style.card.wrapper.rowBottom.spacedRow.get}>
                <span>{model.company}</span>
                <span>{model.location}</span>
                <Pill>{model.seniority}</Pill>
            </div>
            <div class={style.card.wrapper.rowBottom.spacedRow.get}>
                {#each model.tags as tag}
                    <Pill>{tag}</Pill>
                {/each}
            </div>
        </div>
    </div>
</div>
