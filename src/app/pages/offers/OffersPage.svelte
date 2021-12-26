<script>
    import Messages from "../../components/list/Messages.svelte";
    import OffersPageService from "../../services/pages/offers/OffersPageService";
    import Main from "./main/Main.svelte";
    import Searchbar from "./searchbar/Searchbar.svelte";
    import style from "./styles";

    export let companyId;

    let page = OffersPageService.get(companyId);
    const update = () => {
        page = OffersPageService.get(companyId);
    };
</script>

<div class={style.page.get}>
    <Searchbar
        style={style.page.searchbar}
        model={page.searchbar}
        onFilter={update}
    />
    <Main style={style.page.main} model={page.main} />
    <Messages messages={page.messages} />
</div>
