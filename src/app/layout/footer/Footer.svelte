<script>
    import style from "./styles";

    export let footer;
</script>

<footer class={style.footer.get}>
    <a
        class={style.footer.clearbit.get}
        href={footer.clearbit.path}
        target="_blank"
        rel="noreferrer">{footer?.clearbit.label}</a
    >
    <div>
        <a
            class={style.footer.author.get}
            href={footer.author.path}
            target="_blank"
            rel="noreferrer">{footer?.author.label}</a
        >
    </div>
</footer>
