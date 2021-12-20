<script>
    import Pill from "../../../components/atom/pill/Pill.svelte";
    import OfferModel from "../../../model/offer/OfferModel";
    import style from "./styles";

    export let offer;

    const model = new OfferModel(offer);
</script>

<div class={style.card.get}>
    <img
        class={style.card.image.get}
        src={model.contractor.avatar}
        alt={model.title}
    />
    <div class={style.card.wrapper.get}>
        <div class={style.card.wrapper.rowTop.get}>
            <a class={style.card.wrapper.rowTop.title.get} href={model.idPath}
                >{model.title}</a
            >
            <span class={style.card.wrapper.rowTop.salary.get}
                >{model.salary}</span
            >
        </div>
        <div class={style.card.wrapper.rowBottom.get}>
            <div class={style.card.wrapper.rowBottom.spacedRow.get}>
                <span>{model.contractor.name}</span>
                <span>{model.location}</span>
                <Pill>{model.type}</Pill>
            </div>
            <div class={style.card.wrapper.rowBottom.spacedRow.get}>
                {#each model.tags as tag}
                    <Pill>{tag}</Pill>
                {/each}
            </div>
        </div>
    </div>
</div>
