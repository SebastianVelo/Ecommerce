<script>
    import Action from "../../../../../shared/components/atom/action/Action.svelte";
    export let style;
    export let model;
</script>

<div class={style.get}>
    {#each model.actions as action}
        <Action type={action.type} action={{...action}} />
    {/each}
</div>
