<script>
    import { SendMessage }    from "$lib/js/main.js";
    import footerImgWhatsApp from "$lib/svg/whatsapp.svg";
    import footerImgTelegram from "$lib/svg/telegram.svg";
</script>

<section class="contacts">
    <section class="contacts__info">
    <h1 id="heading6" class="section__title services__section_title animated">
        Есть проект? 
        <span class="section__title_allocation">
        Оставьте заявку и<br />
        мы поможем в его реализации
        </span>
    </h1>
    </section>

    <form class="contacts__feedback" on:submit={SendMessage}>
        <div class="contacts__feedback_input">
            <label class="user__input_label animated" for="user__name">Whatsapp</label>
            <a class="user__input_img-container" href="https://api.whatsapp.com/send?phone=79251321623&text=Добрый день! Давайте обсудим мой заказ">
                <img class="user__input_img" src={footerImgWhatsApp} alt="image" /></a
            >
        </div>

        <div class="contacts__feedback_input">
            <label class="user__input_label animated" for="user__contact">Telegram</label>
            <a class="user__input_img-container" href="https://web.telegram.org/k/#@Bondarev45">
                <img class="user__input_img" src={footerImgTelegram} alt="image" /></a
            >
        </div>
    </form>

</section>