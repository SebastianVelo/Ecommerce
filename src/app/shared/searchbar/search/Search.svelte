<script>
    import StyleSheet from "../../../../tailwind/StyleSheet";
    export let search;

    let val;

    const style = StyleSheet("", {
        wrapper: StyleSheet("flex items-center justify-start w-full relative", {
            input: StyleSheet(
                "bg-black p-4 rounded-bl-lg rounded-tl-lg w-full lg:w-1/2 text-white focus:outline-none focus:w-full transition-500 transition-width shadow-2xl border-t border-b border-l border-primary-light"
            ),
        }),
    });
</script>

<div class={style.wrapper.get}>
    <input class={style.wrapper.input.get} type="text" bind:value={val} />
    <button
        class={`${
            !val ? "cursor-not-allowed" : ""
        } p-4 hover:bg-primary rounded-br-lg rounded-tr-lg text-xl transition-all transition-500 bg-black border-2 border-primary-light`}
        disabled={!val}
        on:click={() => search(val)}>🔎</button
    >
</div>
