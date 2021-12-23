<script>
    import Filters from "../shared/filters/Filters.svelte";

    const filters = [
        {
            label: "Expert",
            color: "from-red-300 to-red-900 ring-red-900",
            property: "seniority",
            value: "expert",
        },
        {
            label: "Sr",
            color: "from-orange-300 to-orange-900 ring-orange-900",
            property: "seniority",
            value: "senior",
        },
        {
            label: "Mid",
            color: "from-blue-300 to-blue-900 ring-blue-900",
            property: "seniority",
            value: "mid",
        },
        {
            label: "Jr",
            color: "from-indigo-300 to-indigo-900 ring-indigo-900",
            property: "seniority",
            value: "junior",
        },
    ];
</script>

<Filters
    {filters}
    style="flex items-center justify-start py-4 px-2 space-x-8 overflow-x-auto"
/>
