<script>
    export let model;
    export let style;
</script>

<div class={style.get}>
    <img class={style.avatar.get} src={model.avatar.src} alt={model.avatar.alt} />
    <div>
        <h1 class={style.title.get}>{model.title}</h1>
        <p class={style.location.get}>{model.location}</p>
        <p class={style.salary.get}>{model.salary}</p>
    </div>
</div>
