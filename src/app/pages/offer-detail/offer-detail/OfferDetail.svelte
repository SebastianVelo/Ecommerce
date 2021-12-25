<script>
    import Body from "./body/Body.svelte";
    import Footer from "./footer/Footer.svelte";
    import Header from "./header/Header.svelte";
    import style from "./styles";
    export let model;

</script>

<div class={style.offerDetail.get}>
    <Header model={model.header} style={style.offerDetail.header} />
    <Body model={model.body} style={style.offerDetail.body} />
    <Footer model={model.footer} style={style.offerDetail.footer} />
</div>
