<script>
    import style from "./styles";
    export let footer;
</script>

<footer class={style.footer.get}>
    <a
        class="absolute left-5 top-2 text-sm font-bold text-white"
        href="https://clearbit.com">Logos provided by Clearbit</a
    >
    <div class={style.footer.author.get}>
        <a
            href="https://www.linkedin.com/in/sebastian-velo/"
            target="_blank"
            rel="noreferrer">{footer?.author}</a
        >
    </div>
</footer>
