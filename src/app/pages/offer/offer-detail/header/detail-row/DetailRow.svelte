<script>
    export let model;
    export let style;
</script>

<div class={style.get}>
    <img class={style.avatar.get} src={model.contractor.avatar} alt={model.contractor.name} />
    <div>
        <h1 class={style.title.get}>{model.title}</h1>
        <p>{model.location}</p>
        <p>{model.salary}</p>
    </div>
</div>
