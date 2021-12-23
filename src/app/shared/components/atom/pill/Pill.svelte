<script>
    export let color = "bg-primary-light text-black";

</script>

<div class={`${color} rounded-xl text-center px-4 font-bold h-full text-xs flex items-center`}>
    <slot />
</div>
