<script>
    export let right = false;
    export let changePage;
    export let disabled;

    const label = right ? "►" : "◄";
</script>

<button
    class="bg-black py-2 text-white text-xl w-16 rounded-lg hover:bg-primary hover:text-black"
    {disabled}
    on:click={changePage}
>
    {label}
</button>
