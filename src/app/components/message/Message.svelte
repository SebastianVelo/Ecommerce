<script>
    export let message;
    export let show;
</script>

{#if show}
    <div class="h-96 text-center">
        <p class="text-primary-light text-3xl">
            {message}
        </p>
    </div>
{/if}
