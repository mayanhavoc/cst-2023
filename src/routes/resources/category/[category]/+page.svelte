<script lang='ts'>
    export let data;
</script>

<div class="container">
    {#if data.category && data.category.length > 0}
    <ul class="list">
        {#each data.posts as post}
        <li class="item">
            <h2 class="sub-heading">
                <a class="item__link" href={post.path}>
                    {post.meta.title}
                </a>
            </h2>
            <p class="paragraph">Fecha de publicación {post.meta.date}</p>
        </li>
        {/each}
    </ul>
    {:else}
        <p class="paragraph">No posts found.</p>
    {/if}
</div>