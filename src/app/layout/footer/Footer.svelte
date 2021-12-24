<script>
    import style from "./styles";
    export let footer;
</script>

<footer class={style.footer.get}>
    <div class={style.footer.author.get}>
        <a
            href="https://www.linkedin.com/in/sebastian-velo/"
            target="_blank"
            rel="noreferrer">{footer?.author}</a
        >
    </div>
</footer>
