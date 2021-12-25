import OffersPage from "../../pages/offers/OffersPage.svelte";
import OfferDetailPage from "../../pages/offer-detail/OfferDetailPage.svelte";

class LayoutService {

    static getNavigation() {
        return {
            brand: "hiringroom",
            actions: [
                {
                    label: "Offers",
                    path: "/all/offers",
                },
            ],
            sections: [],
        }
    }

    static getMain() {
        return {
            pages: [
                { path: "/all/offers", component: OffersPage },
                { path: "/:companyId/offers", component: OffersPage },
                { path: "/offer/:id", component: OfferDetailPage },
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