<script>
    export let data;
</script>

<svelte:head>
    <title>Programa  - Cardano Sin Tecnicismos 2023</title>
</svelte:head>

<div class="container">
    <h1 class="heading">Programa</h1>
    <p class="paragraph">La promesa de la tecnología blockchain y el "Web 3.0" es la decentralización de una de las herramientas que más ha tenido impacto en la era moderna, el internet. Para que se cumpla esta promesa, es importante que este recurso llegue a los rincones más recónditos del planeta en donde se esconde un enorme potencial. Este es un pequeño esfuerzo que busca aportar a esa meta ayudando a hacer llegar contenido educativo de esta herramienta a personas de habla hispana.</p>
    <ul class="list">
        {#each data.posts as post}
            <li class="item">
                <h2 class="sub-heading">
                    <a href={post.path} class="item__link">{post.meta.title}</a>
                </h2>
                <p class="paragraph">Publicado en {post.meta.date}</p>
            </li>
        {/each}
    </ul>
    <ul class="list">
        <li class="item">
            <h2 class="list-heading">El testnet de Cardano y la billetera Nami</h2>
            <ul class="list">
                <li class="item">Crear una billetera digital</li>
                <li class="item">Manejo de llaves - frases semilla</li>
                <li class="item">Obtener y enviar tAda</li>
            </ul>
        </li>
        <li class="item">
            <h2 class="list-heading">Acuñar tokens y NFTs con la billetera GameChanger</h2>
            <ul class="list">
                <li class="item">Tokens vs NFTs</li>
                <li class="item">Acuñar tokens y NFTs</li>
            </ul>
        </li>
        <li class="item">
            <h2 class="list-heading">Delegación y staking con la billetera Eternl</h2>
            <ul class="list">
                <li class="item">¿Qué es el staking?</li>
                <li class="item">¿Qué es la delegación?</li>
                <li class="item">¿Qué es un stake pool?</li>
                <li class="item">KPIs de stake pools</li>
            </ul>
        </li>
    </ul>
</div>