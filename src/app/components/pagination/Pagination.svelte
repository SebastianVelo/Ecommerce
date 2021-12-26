<script>
    import QueryService from "../../services/query/QueryService";
    import Control from "./control/Control.svelte";
    export let total;
    export let pagesToShow;
    export let onChange;

    let active = +QueryService.getOffersQuery().page || 1;
    let half = Math.floor(pagesToShow / 2) + 1;
    const getPages = () =>
        Array(pagesToShow)
            .fill("")
            .map((_, i) => i + 1)
            .map((i) =>
                active < half // Active is less than half of quantityToShow
                    ? i // Then return the number
                    : active > total - half + 1 // Active is greater than the total pages - half of quantityToShow
                    ? i + (total - pagesToShow) // Then return the number + the difference between size and quantity to show
                    : i + (active - half)
            );
    let pages = getPages();

    const handleClick = (page) => {
        if (onChange) onChange(page);
        active = page;
        pages = getPages();
    };
</script>

<div class="flex space-x-4 px-4 py-2 overflow-x-auto items-center">
    <Control
        changePage={() => handleClick(active - 1)}
        disabled={active === 1}
    />
    <div class="space-x-2 overflow-x-auto flex">
        {#each pages as page}
            <button
                class={`${
                    page !== active
                        ? "bg-black text-white"
                        : "bg-primary-light "
                } text-xl h-12 w-12 font-black rounded-lg hover:bg-primary-light hover:text-black`}
                on:click={() => handleClick(page)}>{page}</button
            >
        {/each}
    </div>
    <Control
        changePage={() => handleClick(active + 1)}
        disabled={active === total}
        right
    />
</div>
