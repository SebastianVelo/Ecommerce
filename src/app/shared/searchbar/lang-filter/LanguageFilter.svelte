<script>
    import Filters from "../shared/filters/Filters.svelte";

    const filters = [
        {
            label: "JS",
            color: "from-yellow-300 to-yellow-500 ring-yellow-500",
            property: "lang",
            value: "javascript",
        },
        {
            label: "HTML",
            color: "from-orange-300 to-orange-500 ring-orange-200",
            property: "lang",
            value: "HTML",
        },
        {
            label: "PHP",
            color: "from-blue-300 to-blue-500 ring-blue-200",
            property: "lang",
            value: "php",
        },
        {
            label: "Ruby",
            color: "from-red-300 to-red-500 ring-red-200",
            property: "lang",
            value: "Ruby",
        },
        {
            label: "Python",
            color: "from-blue-300 to-blue-500 ring-blue-200",
            property: "lang",
            value: "Python",
        },
        {
            label: "Java",
            color: "from-red-300 to-red-500 ring-red-200",
            property: "lang",
            value: "Java",
        },
    ];
</script>

<Filters
    {filters}
    style="flex items-center lg:justify-center py-4 px-2 space-x-8 overflow-x-auto col-span-2"
/>
