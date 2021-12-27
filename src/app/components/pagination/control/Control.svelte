<script>
    export let right = false;
    export let changePage;
    export let disabled;

    const label = right ? "►" : "◄";
</script>

<button
    class={`${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-black text-white hover:bg-primary-light hover:text-black'} text-xl w-10 h-10 rounded-lg`}
    {disabled}
    on:click={changePage}
>
    {label}
</button>
