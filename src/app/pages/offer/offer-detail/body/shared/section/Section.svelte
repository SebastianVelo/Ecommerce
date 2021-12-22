<script>
    import style from "./styles";
    export let title;
</script>

<section class={style.section.get}>
    <h1 class={style.section.title.get}>{title}</h1>
    <div class={style.section.child.get}>
        <slot />
    </div>
</section>
