<script>
    import { navigate } from "svelte-routing";
    import StyleSheet from "../../../../tailwind/StyleSheet";
    let val;

    const search = () => {
        const params = new URLSearchParams(window.location.search);
        params.set("query", val);
        navigate(`/offers?${params.toString()}`);
        window.location.reload();
    };

    const style = StyleSheet(
        "flex flex-row lg:flex-col items-center justify-center h-full col-span-2 lg:col-span-1",
        {
            wrapper: StyleSheet(
                "flex items-center justify-end w-full relative",
                {
                    input: StyleSheet(
                        "bg-black p-4 rounded-full w-full lg:w-1/2 text-white focus:outline-none focus:w-full transition-500 transition-width shadow-2xl border-2 border-blue-500"
                    ),
                }
            ),
        }
    );
</script>

<div class={style.get}>
    <div class={style.wrapper.get}>
        <input class={style.wrapper.input.get} type="text" bind:value={val} />
        <button
            class={`${
                !val ? "cursor-not-allowed" : ""
            } p-4 rounded-br-full rounded-tr-full text-xl transition-all transition-500 absolute right`}
            disabled={!val}
            on:click={search}>🔎</button
        >
    </div>
</div>
