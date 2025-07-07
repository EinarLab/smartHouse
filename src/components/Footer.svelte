<script>
    import { SwitchTheme } from "$lib/js/main.js";
    import logo from "$lib/img/lightbulb.jpg";
    import footerImgWhatsApp from "$lib/svg/whatsapp.svg";
    import footerImgTelegram from "$lib/svg/telegram.svg";
</script>

<footer class="animated">
    <div class="footer__container_left">
        <img
            on:click={SwitchTheme}
            class="footer__logo"
            src={logo}
            alt="logo"
        />
        <h1 class="company__name footer__company_name">Borisovich</h1>
    </div>
    <div class="footer__container_center">
        <a
            class="footer__img_container"
            href="https://api.whatsapp.com/send?phone=79251321623&text=Добрый день! Давайте обсудим мой заказ"
        >
            <img class="footer__img" src={footerImgWhatsApp} alt="image" />
        </a>
        <a class="footer__img_container" href="https://t.me/@Bondarev45">
            <img class="footer__img" src={footerImgTelegram} alt="image" /></a
        >
    </div>
    <div class="footer__container_right">
        <a class="footer__phone" href="tel:+79251321623">+7 (925) 132 16-23</a>
    </div>
</footer>
