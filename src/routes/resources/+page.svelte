<script>
    export let data;
</script>

<style>
    .recursos {
        display: flex;
        flex-direction: column;
        align-items: center; 
        height: 100%;
        max-width: 75rem;
        margin: 5em auto;
        position: relative;
    }
</style>

<svelte:head>
    <title>Recursos - Cardano Sin Tecnicismos 2023</title>
</svelte:head>

<div class="container">
    <h1 class="heading">Recursos</h1>
    <hr>
    <ul class="list">
        {#each data.posts as post}
            <li class="item">
                <h2 class="sub-heading">
                    <a class="item__link" href={post.path}>{post.meta.title}</a>
                </h2>
                <p class="paragraph">Publicado en {post.meta.date}</p>
            </li>
        {/each}
    </ul>
</div>