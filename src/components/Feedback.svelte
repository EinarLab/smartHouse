<script>
    import FeedbackItem from "./FeedbackItem.svelte";
    import FeedbackItemSecond from "./FeedbackItemSecond.svelte";
</script>

<section class="feedback">
    <h1 id="heading5" class="section__title services__section_title animated">
        Отзывы
    </h1>

    <section class="feedback__item_container">
        <FeedbackItem
            feedbackDate={"25 июня 2025."}
            feedbackName={"Валерий"}
            feedbackText={"Проект был выполнен в срок.Все пожелания учтены.Рекомендую."}
        ></FeedbackItem>

        <FeedbackItem
            feedbackDate={"23 июня 2025."}
            feedbackName={"Андрей"}
            feedbackText={"Заказ был выполнен в оговоренный срок с учетом всех пожеланий и дополнений, с высоким качеством. Рекомендую."}
        ></FeedbackItem>
        <FeedbackItem
            feedbackDate={"9 июня 2025"}
            feedbackName={"Дмитрий"}
            feedbackText={"Высокая квалификация специалиста"}
        ></FeedbackItem>
    </section>

    <section class="feedback__item_container-second">
        <FeedbackItemSecond
            feedbackDate={"23 мая 2025."}
            feedbackName={"Виталий"}
            feedbackText={"Отличный специалист. Работу выполнил в полном объеме. Объяснил всё и рассказал почему именно использовал те или иные комплектующие. Объяснил всё по полочкам. Человек грамотный, знает своё дело."}
        ></FeedbackItemSecond>

        <FeedbackItemSecond
            feedbackDate={"16 мая 2025."}
            feedbackName={"Ленуська"}
            feedbackText={"У меня честно даже нет слов. На столько все оперативно, четко и по делу. Быстро выехал на место, дал совет по щитам. И предоставил несколько вариаций однолинейных схем. Только положительный восторг. Однозначно будем обращаться еще. Мастер своего дела и человек отличный.👍"}
        ></FeedbackItemSecond>

        <FeedbackItemSecond
            feedbackDate={"14 апреля 2025."}
            feedbackName={"Евгений"}
            feedbackText={"Спасибо, за выполненную работу. Заказывали у Дениса рабочий проект электроснабжение для индивидуального дома. Документацию получили вовремя, в полном объёме, были учтены все наши требования, заложенные в дизайн проекте."}
        ></FeedbackItemSecond>
    </section>
</section>
