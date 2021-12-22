<script>
    import Filters from "../shared/filters/Filters.svelte";

    const filters = [
        {
            label: "Sr",
            color: "from-green-300 to-green-500 ring-green-500",
            property: "seniority",
            value: "senior",
        },
        {
            label: "Mid",
            color: "from-blue-300 to-blue-500 ring-blue-500",
            property: "seniority",
            value: "mid",
        },
        {
            label: "Jr",
            color: "from-indigo-300 to-indigo-500 ring-indigo-500",
            property: "seniority",
            value: "junior",
        },
    ];
</script>

<Filters
    {filters}
    style="flex items-center justify-start py-4 px-2 space-x-8 overflow-x-auto"
/>
