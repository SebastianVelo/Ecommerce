import OffersPage from "../../app/pages/offers/OffersPage.svelte";
import OfferPage from "../../app/pages/offer/OfferPage.svelte";

class LayoutService {

    static getNavigation() {
        return {
            brand: "hiringroom",
            actions: [
                {
                    label: "Offers",
                    path: "/offers",
                },
            ],
            sections: [],
        }
    }

    static getMain() {
        return {
            pages: [
                { path: "/offers", component: OffersPage },
                { path: "/offer/:id", component: OfferPage },
            ]
        }
    }

    static getFooter() {
        return {
            author: "Developed with ❤️ by Sebastián Velo"
        }
    }
}

export default LayoutService;