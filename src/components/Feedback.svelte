<script>
    import FeedbackItem from "./FeedbackItem.svelte";
    import FeedbackItemSecond from "./FeedbackItemSecond.svelte";
</script>

<section class="feedback">
    <h1 id="heading6" class="section__title animated">
        Отзывы
    </h1>

    <section class="feedback__item_container">
        <FeedbackItem
            feedbackDate={"1 июля 2025"}
            feedbackName={"Ольга"}
            feedbackType={"Проектирование электроснабжения"}
            feedbackText={"Отличный специалист! Все четко, быстро, дал много советов и дополнительных консультаций."}
        ></FeedbackItem>

        <FeedbackItem
            feedbackDate={"25 июня 2025"}
            feedbackName={"Валерий"}
            feedbackType={"Автоматизация электроснабжения"}
            feedbackText={"Проект был выполнен в срок.Все пожелания учтены.Рекомендую."}
        ></FeedbackItem>
        <FeedbackItem
            feedbackDate={"23 июня 2025"}
            feedbackName={"Андрей"}
            feedbackType={"Проектирование электроснабжения"}
            feedbackText={"Заказ был выполнен в оговоренный срок с учетом всех пожеланий и дополнений, с высоким качеством. Рекомендую."}
        ></FeedbackItem>
    </section>

    <section class="feedback__item_container-second">
        <FeedbackItemSecond
            feedbackDate={"9 июня 2025"}
            feedbackName={"Дмитрий"}
            feedbackType={"Проектирование электроснабжения"}
            feedbackText={"Высокая квалификация специалиста"}
        ></FeedbackItemSecond>

        <FeedbackItemSecond
            feedbackDate={"23 мая 2025"}
            feedbackName={"Виталий"}
            feedbackType={"Онлайн-консультация электрика"}
            feedbackText={"Отличный специалист. Работу выполнил в полном объеме. Объяснил всё и рассказал почему именно использовал те или иные комплектующие. Объяснил всё по полочкам. Человек грамотный, знает своё дело."}
        ></FeedbackItemSecond>

        <FeedbackItemSecond
            feedbackDate={"16 мая 2025"}
            feedbackName={"Ленуська"}
            feedbackType={"Составление плана электропроводки"}
            feedbackText={"У меня честно даже нет слов . На столько все оперативно , четко и по делу . Быстро выехал на место , дал совет по щитам . И предоставил несколько вариаций однолинейных схем. Только положительный восторг . Однозначно будем обращаться еще . Мастер своего дела и человек отличный .👍"}
        ></FeedbackItemSecond>
    </section>
</section>
