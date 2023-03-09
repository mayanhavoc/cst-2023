<script>
    export let data
</script>
  
<svelte:head>
    <title>Programa - {data.title}</title>
    <meta property="og:title" content={data.title}/>
</svelte:head>

<style>
     .post {
        display: flex;
        flex-direction: column;
        align-items: center; 
        height: 100%;
        max-width: 75rem;
        margin: 5em auto;
        position: relative;
    }

    h1, h2, p {
        margin: 0;
    }
</style>

<div class="container">
    <article>
        <h1 class="heading">{data.title}</h1>
        <p class="paragraph">Fecha de publicación: {data.date}</p>
        <svelte:component this={data.content} />
        <!-- {#if data.categories.length}
            <h2 class="sub-heading">Categorías</h2>
            <ul class="list">
                {#each data.categories as category }
                    <li class="item">
                        <a class="item__link" href="/program/{category}">
                            {category}
                        </a>
                    </li>
                {/each }
            </ul>
        
        {/if} -->
    </article>
</div>
