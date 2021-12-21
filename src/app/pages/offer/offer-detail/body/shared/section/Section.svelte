<script>
    export let title;
</script>

<section class="bg-gray-900 divide-y-2 divide-gray-800 text-white shadow-xl">
    <div class="py-4 px-4">
        <h1 class="text-2xl">{title}</h1>
    </div>
    <div class="py-2 px-4">
        <slot></slot>
    </div>
</section>
