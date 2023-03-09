<style>
    footer {
      padding: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .footer__container {
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
    }
    
    ul {
      margin: 0;
      list-style-type: none;
      display: flex;
      gap: 1rem;
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }

    @media (min-width: 600px) {
        .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>

<footer>
    <div class="footer__container row">
        <a href="/">Inicio</a>
        <nav>
            <ul>
                <li>
                    <a href="/about">Acerca de</a>
                </li>
                <li>
                    <a href="/program">Programa</a>
                </li>
                <li>
                    <a href="/resources">Recursos</a>
                </li>
                <li>
                    <a href="/contact">Contacto</a>
                </li>
            </ul>
        </nav>
    </div>
</footer>