<script>
    import style from "./styles";
    export let size;

    const getPointClass = (idx) =>
        idx > size ? style.rating.pointInactive : style.rating.pointActive;
    const arr = Array(5)
        .fill(".")
        .map((_, i) => i + 1);
</script>

<div class={style.rating.get}>
    {#each arr as idx}
        <span class={getPointClass(idx).get} />
    {/each}
</div>
