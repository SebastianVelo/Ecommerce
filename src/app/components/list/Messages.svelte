<script>
    import Message from "../message/Message.svelte";

    export let messages;
    export let style;
</script>

<section class={style}>
    {#each messages as message}
        <Message {...message} />
    {/each}
</section>
