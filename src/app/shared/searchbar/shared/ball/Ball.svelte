<script>
    import StyleSheet from "../../../../../tailwind/StyleSheet";
    import { getSearchParams } from "../../../../usecases/params/getParams";
    export let label;
    export let color;
    export let property;
    export let value;

    const params = getSearchParams();
    const active = !params.get(property) || params.get(property) === value;
    params.get(property) === value
        ? params.delete(property)
        : params.set(property, value);
    params.delete("page");
    const path = `/offers?${params.toString()}`;

    const style = StyleSheet(
        `${
            !active && "opacity-25"
        } transition-all transition-500 flex flex-col items-center space-y-2 hover:opacity-100`,
        {
            ball: StyleSheet(
                `${color} bg-gradient-to-b w-10 h-10 ring-2 ring-offset-4 ring-offset-gray-800 rounded-full flex items-center justify-center font-bold shadow-lg text-xs`
            ),
            label: StyleSheet("text-white font-bold"),
        }
    );
</script>

<a href={path} class={style.get}>
    <div class={style.ball.get} />
    <h3 class={style.label.get}>{label}</h3>
</a>
