<script>
      import logo                                                      from "$lib/img/lightbulb.jpg";
      import { SwitchTheme, smoothScrollToHeading }                    from "$lib/js/main.js";

</script>

<nav class="nav">
    <div class="nav-left animated">
    <img on:click={SwitchTheme} class="logo" src={logo} alt="logo" />
    <h1 class="company__name">Borisovich</h1>
    </div>

    <div class="nav-right animated">
    <button class="nav__button" on:click={() => smoothScrollToHeading("heading1")}>О компании</button>
    <button class="nav__button" on:click={() => smoothScrollToHeading("heading2")}>Области работы</button>
    <button class="nav__button" on:click={() => smoothScrollToHeading("heading3")}>Услуги</button>
    <button class="nav__button" on:click={() => smoothScrollToHeading("heading4")}>Отзывы</button>
    <button class="nav__button" on:click={() => smoothScrollToHeading("heading5")}>Контакты</button>
    </div>
</nav>