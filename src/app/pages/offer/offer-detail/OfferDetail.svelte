<script>
    import OfferModel from "../../../../model/offer/OfferModel";
    import Description from "./description/Description.svelte";
    import Header from "./header/Header.svelte";
    import style from "./styles";
    import TechStack from "./tech-stack/TeckStack.svelte";
    import Action from "../../../shared/components/atom/action/Action.svelte";
    export let offer;

    const model = new OfferModel(offer);
</script>

<div class={style.offerDetail.get}>
    <Header {model} style={style.offerDetail.header} />
    <div class="mt-8 lg:mt-24 space-y-8">
        <TechStack skills={model.skills} />
        <Description description={model.description} />
    </div>
    <div class="flex items-center w-full justify-center p-4">
        <Action type="button" action={{ label: "Apply now" }} />
    </div>
</div>
