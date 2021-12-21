<script>
    export let size;

    const getColor = (idx) => (idx > size ? "bg-green-900" : "bg-green-500");
    const arr = Array(5)
        .fill(".")
        .map((_, i) => i + 1);
</script>

<div class="flex space-x-2 items-center">
    {#each arr as idx}
        <span class={`${getColor(idx)} h-3 w-3 flex rounded-full`} />
    {/each}
</div>
