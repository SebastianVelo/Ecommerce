<script>
    import getOfferDetail from "../../../usecases/offer-detail/getOfferDetail";
    import Header from "./header/Header.svelte";
    import Body from "./body/Body.svelte";
    import Footer from "./footer/Footer.svelte";
    import style from "./styles";
    export let offer;

    const model = getOfferDetail(offer);
</script>

<div class={style.offerDetail.get}>
    <Header model={model.header} style={style.offerDetail.header} />
    <Body model={model.body} style={style.offerDetail.body} />
    <Footer model={model.footer} style={style.offerDetail.footer} />
</div>
