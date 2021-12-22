<script>
    import { navigate } from "svelte-routing";
    import Ball from "../ball/Ball.svelte";

    let val;

    const search = () => {
        const params = new URLSearchParams(window.location.search);
        params.set("query", val);
        navigate(`/offers?${params.toString()}`, { replace: true });
    };
</script>

<div
    class="px-4 space-y-2 lg:space-y-0 space-x-8 flex flex-col lg:flex-row justify-between lg:items-center"
>
    <div class="flex flex-col items-center justify-between h-full">
        <h3 class="text-lg text-white font-bold">Search...</h3>
        <div class="flex items-center justify-center space-x-2">
            <input
                class="bg-gray-900 p-2 rounded-full w-full lg:w-64 text-white"
                type="text"
                bind:value={val}
            />
            <button
                class="bg-gray-900 p-2 rounded-full text-xl"
                on:click={search}>🔎</button
            >
        </div>
    </div>
    <div class="flex justify-between items-center py-4 px-2 space-x-8">
        <Ball
            label="Sr"
            color="from-green-300 to-green-500 ring-green-500"
            property="seniority"
            value="senior"
        />
        <Ball
            label="Mid"
            color="from-blue-300 to-blue-500 ring-blue-500"
            property="seniority"
            value="mid"
        />
        <Ball
            label="Jr"
            color="from-indigo-300 to-indigo-500 ring-indigo-500"
            property="seniority"
            value="junior"
        />
    </div>
    <div class="flex justify-between items-center py-4 px-2 space-x-8">
        <Ball
            label="JS"
            color="from-yellow-300 to-yellow-500 ring-yellow-200"
            property="lang"
            value="javascript"
        />
        <Ball
            label="HTML"
            color="from-orange-300 to-orange-500 ring-orange-200"
            property="lang"
            value="HTML"
        />
        <Ball
            label="PHP"
            color="from-blue-300 to-blue-500 ring-blue-200"
            property="lang"
            value="php"
        />
        <Ball
            label="Ruby"
            color="from-red-500 to-red-700 ring-red-200"
            property="lang"
            value="Ruby"
        />
        <Ball
            label="Python"
            color="from-blue-600 to-blue-900 ring-blue-200"
            property="lang"
            value="Python"
        />
        <Ball
            label="Java"
            color="from-red-500 to-red-100 ring-red-200"
            property="lang"
            value="Java"
        />
    </div>
</div>
