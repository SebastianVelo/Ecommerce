import OffersPage from "../../pages/offers/OffersPage.svelte";
import OfferDetailPage from "../../pages/offer-detail/OfferDetailPage.svelte";
import LoginPage from "../../pages/login/LoginPage.svelte";

class LayoutService {

    static getNavigation() {
        return {
            brand: "hiringroom",
            actions: [
                {
                    label: "Offers",
                    path: "/all/offers",
                }, 
                {
                    label: "Login",
                    path: "/login",
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
                { path: "/login", component: LoginPage },
            ]
        }
    }

    static getFooter() {
        return {
            author: {
                label: "Developed with ❤️ by Sebastián Velo",
                path: "https://www.linkedin.com/in/sebastian-velo/"
            },
            clearbit: {
                label: "Logos provided by Clearbit",
                path: "https://clearbit.com"
            }
        }
    }
}

export default LayoutService;