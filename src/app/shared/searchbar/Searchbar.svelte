<script>
    const getBall = (color) =>
        `${color} bg-gradient-to-b w-12 h-12 ring-2 ring-offset-2 ring-offset-gray-700 rounded-full flex items-center justify-center font-bold shadow-lg text-xs`;
</script>

<div class="px-4 py-2 space-y-2 lg:space-y-0 flex flex-col lg:flex-row justify-between lg:items-center">
    <input class="bg-gray-900 p-2 rounded-full w-full lg:w-64" type="text" />
    <div class="flex justify-between lg:justify-end w-full py-2 space-x-4">
        <div class={getBall("from-yellow-400 to-yellow-600 ring-yellow-200")}>
            JS
        </div>
        <div class={getBall("from-orange-300 to-orange-600 ring-orange-400")}>
            HTML
        </div>
        <div class={getBall("from-blue-300 to-blue-600 ring-blue-200")}>
            php
        </div>
        <div class={getBall("from-red-300 to-red-600 ring-red-400")}>Ruby</div>
        <div
            class={getBall(
                "from-blue-600 to-blue-900 ring-blue-500 text-white"
            )}
        >
            Py
        </div>
        <div class={getBall("from-red-200 to-red-400 ring-red-100")}>Java</div>
    </div>
</div>
