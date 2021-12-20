<script>
    import OfferService from "../../services/offer/OfferService";
    import OfferCard from "./offer-card/OfferCard.svelte";
    import style from "./styles";


    const map = {
        src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13716.856892401946!2d-58.365049109338116!3d-34.60854119731434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1639976407069!5m2!1ses-419!2sar",
    };

    const offers = OfferService.getAll();
</script>

<div class={style.page.get}>
    <section />
    <section class={style.page.main.get}>
        <div class={style.page.main.offers.get}>
            {#each offers as offer}
                <OfferCard {offer} />
            {/each}
        </div>
        <iframe
            class={style.page.main.map.get}
            src={map.src}
            title="offers"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
        />
    </section>
</div>
