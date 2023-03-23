<style>
    header {
      padding: 0.5em 0;
      background: var(--background-color);
      position: fixed;
      font-family: var(--secondary-font);
      font-weight: 900;
      letter-spacing: 1.1px;
      text-align: center;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
    }

    .nav__container {
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
    }

    .nav {
        visibility: hidden;
        height: 0;
        position: relative;
    }

    .nav--visible {
        visibility: visible;
        height: auto;
        position: relative;
    }
    
    .nav__list {
      margin: 0 auto;
      list-style: none;
      display: flex;
      gap: 1rem;
    }

    .nav__item {
        margin-top: 1rem;
    }
    
    .nav__link {
      text-decoration: none;
      color: black;
    }

    .nav__link--button {
        padding: .25em 1em;
    }

    .nav__link:hover,
    .nav__link:focus {
        opacity: 0.75;
    }

    .nav-toggle {
        cursor: pointer;
        border: 0;
        width: 3rem;
        height: 3rem;
        padding: 0em;
        transition: opacity 250ms ease;
        position: absolute;
        left: 0;
        margin-top: 0.5rem;
    }

    .nav-toggle:focus,
    .nav-toggle:hover {
        opacity: 0.75;
    }

    .hamburger {
        width: 50%;
        position: relative;
    }

    .hamburger,
    .hamburger::before,
    .hamburger::after {
        display: block;
        margin: 0 auto;
        height: 3px;
        background: black;
    }

    .hamburger::before,
    .hamburger::after {
        content: "";
        width: 100%;
    }

    .hamburger::before {
        transform: translateY(-6px);
    }

    .hamburger::after {
        transform: translateY(3px);
    }

    .nav--logo {
        height: 70px;
    }

    @media (min-width: 600px) {
        .nav__item + .nav__item {
            margin-left: 1em;
        }

        .nav-toggle {
            display:none;
        }

        .nav {
            visibility: visible;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            position: relative;
            height: auto;
        }

        .nav__list {
            display: flex;
            margin: 0;
        }
    
        .nav__list--primary {
          margin: 0 auto;
        }

        .nav__item {
          margin: 0 0 0 1.5em;
        }
    
        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
    }
</style>

<header>
    <div class="nav__container row">
        <button class="nav-toggle" aria-label="open navigation">
            <span class="hamburger"></span>
        </button>
        <a href="/">
            <img src="cst-logo.png" alt="Logo Cardano Sin Tecnicismos" class="nav--logo">
        </a>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <a href="/" class="nav__link">
                        Inicio
                    </a>
                </li>
                <li class="nav__item">
                    <a href="/about" class="nav__link">
                        Acerca de
                    </a>
                </li>
                <li class="nav__item">
                    <a href="/program" class="nav__link">
                        Programa
                    </a>
                </li>
                <li class="nav__item">
                    <a href="/resources" class="nav__link">
                        Recursos
                    </a>
                </li>
                <li class="nav__item">
                    <a href="/contact" class="nav__link">
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>