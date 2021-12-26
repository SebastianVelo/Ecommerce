<script>
    import style from "./styles";
    
    export let type = "link";
    export let action;
</script>

{#if type === "link"}
    <a class={style.link.get} href={action.path} on:click={action.onClick}
        >{action.label}</a
    >
{:else}
    <button class={style.button.get} on:click={action.onClick}
        >{action.label}</button
    >
{/if}
