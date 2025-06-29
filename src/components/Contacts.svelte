<script>
      import { SendMessage }    from "$lib/js/main.js";
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
        <label class="user__input_label animated" for="user__name">Как к Вам обращаться?</label>
        <input id="user__name" class="user__input animated" type="text" placeholder="Иванов Иван Иванович">
    </div>
    <div class="contacts__feedback_input">
        <label class="user__input_label animated" for="user__contact">Как с Вами связаться?</label>
        <input id="user__contact" class="user__input animated" type="text" placeholder="test@mail.ru">
    </div>
    <button type="submit" class="contacts__feedback_button animated">✓</button>
    
    </form>

</section>