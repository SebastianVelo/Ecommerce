<script>
    import Rating from "../../../../../shared/rating/Rating.svelte";
    export let skill;
</script>

<div class="space-y-2 w-32 flex flex-col p-2">
    <Rating size={skill.rating} />
    <div>
        <h3 class="font-semibold">{skill.name}</h3>
        <p class="text-sm">{skill.level}</p>
    </div>
</div>