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
            color: "from-orange-300 to-orange-500 ring-orange-500",
            property: "lang",
            value: "HTML",
        },
        {
            label: "PHP",
            color: "from-indigo-300 to-indigo-500 ring-indigo-500",
            property: "lang",
            value: "php",
        },
        {
            label: "Java",
            color: "from-red-300 to-red-500 ring-red-500",
            property: "lang",
            value: "Java",
        },
        {
            label: "Scala",
            color: "from-red-500 to-red-900 ring-red-900",
            property: "lang",
            value: "Scala",
        },
        {
            label: "Ruby",
            color: "from-red-500 to-red-800 ring-red-800",
            property: "lang",
            value: "Ruby",
        },
        {
            label: "Python",
            color: "from-blue-300 to-blue-500 ring-blue-500",
            property: "lang",
            value: "Python",
        },
        {
            label: "R",
            color: "from-blue-600 to-blue-900 ring-blue-900",
            property: "lang",
            value: "R",
        },
        {
            label: "SQL",
            color: "from-blue-100 to-blue-400 ring-blue-400",
            property: "lang",
            value: "SQL",
        },
    ];
</script>

<Filters
    {filters}
    style="flex items-center lg:justify-center py-4 px-4 space-x-8 overflow-x-auto col-span-2 mx-2"
/>
