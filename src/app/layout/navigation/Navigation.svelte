<script>
    import Action from "../../shared/components/atom/action/Action.svelte";
    import style from "./styles";

    export let navigation = {
        brand: "",
        actions: [],
        sections: [],
    };
</script>

<nav class={style.nav.get}>
    <div class={style.nav.top.get}>
        <h1 class={style.nav.top.header.get}>{navigation.brand}</h1>
        <div class={style.nav.top.actions.get}>
            {#each navigation.actions as action}
                <div
                    class="px-4 py-2 rounded-lg hover:bg-primary-light hover:text-black transition-500 transition-all"
                >
                    <Action {action} />
                </div>
            {/each}
        </div>
    </div>
</nav>
