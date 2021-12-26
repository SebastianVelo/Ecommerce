<script>
    import Action from "../../../../components/atom/action/Action.svelte";

    export let model;
    export let style;
</script>

<div class={style.get}>
    {#each model.actions as action}
        <Action type={action.type} action={{ label: action.label }} />
    {/each}
</div>
