<script>
    import { Route } from "svelte-navigator";
    import OffersPage from "../../pages/offers/OffersPage.svelte";
    import OfferPage from "../../pages/offer/OfferPage.svelte";

    const routes = [
        { path: "/offers", component: OffersPage },
        { path: "/offer/:id", component: OfferPage },
    ];
</script>

<main class="bg-gray-800 h-screen">
    {#each routes as route}
        <Route {...route} />
    {/each}
</main>
