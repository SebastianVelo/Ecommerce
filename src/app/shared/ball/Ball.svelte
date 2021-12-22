<script>
    export let label;
    export let color;
    export let property;
    export let value;

    const params = new URLSearchParams(window.location.search);
    const active = !params.get(property) || params.get(property) === value;
    params.get(property) === value
        ? params.delete(property)
        : params.set(property, value);
    const path = `/offers?${params.toString()}`;

    const wrapperStyle = `${
        !active && "opacity-25"
    } transition-all transition-500 flex flex-col items-center space-y-2`;
    const ballStyle = `${color} bg-gradient-to-b w-10 h-10 ring-2 ring-offset-4 ring-offset-gray-700 rounded-full flex items-center justify-center font-bold shadow-lg text-xs`;
</script>

<a href={path} class={wrapperStyle}>
    <div class={ballStyle} />
    <h3 class="text-white font-bold">{label}</h3>
</a>
