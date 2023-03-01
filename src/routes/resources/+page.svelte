<script>
    export let data;
</script>

<svelte:head>
    <title>Recursos - Cardano Sin Tecnicismos 2023</title>
</svelte:head>
<h1>Recursos</h1>
<ul>
    {#each data.posts as post}
        <li>
            <h2>
                <a href={post.path}>{post.meta.title}</a>
            </h2>
            <p>Publicado en {post.meta.date}</p>
        </li>
    {/each}
</ul>