<script>
    import { navigate } from "svelte-routing";
    import OfferService from "../../../services/offer/OfferService";
    import Map from "../../shared/map/Map.svelte";
    import Pagination from "../../shared/pagination/Pagination.svelte";
    import Searchbar from "../../shared/searchbar/Searchbar.svelte";
    import getOfferCard from "../../usecases/offer-card/getOfferCard";
    import { getQuery } from "../../usecases/params/getParams";
    import OfferCard from "./offer-card/OfferCard.svelte";
    import style from "./styles";

    let offers = OfferService.search(getQuery());
    let models = offers.results.map(getOfferCard);
    
    const update = () => {
        offers = OfferService.search(getQuery());
        models = offers.results.map(getOfferCard);
    };

    const navigateTo = (params) => {
        navigate(`/offers?${params.toString()}`);
        update();
    };

    const paginate = (page) => {
        const params = new URLSearchParams(window.location.search);
        params.set("page", page);
        navigateTo(params);
    };

    const search = (val) => {
        const params = new URLSearchParams(window.location.search);
        params.set("query", val);
        navigateTo(params);
    };
</script>

<div class={style.page.get}>
    <Searchbar {search} />
    <div class="pb-4 flex justify-center lg:justify-start">
        <Pagination
            total={offers.pages}
            pagesToShow={offers.pages > 5 ? 5 : offers.pages}
            onChange={paginate}
        />
    </div>
    <section class={style.page.main.get}>
        <div class={style.page.main.offers.get}>
            {#each models as model}
                <OfferCard {model} />
            {/each}
        </div>
        <Map
            className={style.page.main.map.get}
            longitude={300}
            latitude={30}
        />
    </section>
</div>
