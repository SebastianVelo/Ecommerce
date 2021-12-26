<script>
    import StyleSheet from "../../../../../../../tailwind/StyleSheet";
    import QueryService from "../../../../../../services/query/QueryService";

    export let label;
    export let color;
    export let property;
    export let value;
    export let filter;

    const style = StyleSheet("", {
        ball: StyleSheet(
            `${color} bg-gradient-to-b w-6 h-6 ring-2 ring-offset-4 ring-offset-gray-800 rounded-full flex items-center justify-center font-bold shadow-lg text-xs`
        ),
        label: StyleSheet("text-white font-bold"),
    });

    let active = QueryService.isActive(property, value);
</script>

<button
    on:click={() => filter(property, value)}
    class={`${
        !active && "opacity-25"
    } transition-all transition-500 flex flex-col items-center space-y-2 hover:opacity-100`}
>
    <div class={style.ball.get} />
    <span class={style.label.get}>{label}</span>
</button>
