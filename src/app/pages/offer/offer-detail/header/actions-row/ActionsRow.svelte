<script>
    import Action from "../../../../../shared/components/atom/action/Action.svelte";
    export let style;
</script>

<div class={style.get}>
    <Action action={{ label: "Back", type: "button" }} />
    <Action action={{ label: "Share", type: "button" }} />
</div>
