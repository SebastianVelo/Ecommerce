<script>
    import Messages from "../../components/list/messages/Messages.svelte";
    import OffersPageService from "../../services/pages/offers/OffersPageService";
    import Main from "./main/Main.svelte";
    import Filterbar from "./filterbar/Filterbar.svelte";
    import style from "./styles";

    export let companyId;

    let page = OffersPageService.get(companyId);
    const update = () => {
        page = OffersPageService.get(companyId);
    };

</script>

<div class={style.page.get}>
    <Filterbar
        style={style.page.filterbar}
        model={page.filterbar}
        onFilter={update}
    />
    <Main style={style.page.main} model={page.main} onChange={update} />
    <Messages messages={page.messages} />
</div>
