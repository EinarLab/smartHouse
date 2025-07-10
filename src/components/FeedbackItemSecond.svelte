<script>
    export let feedbackDate = "";
    export let feedbackName = "";
    export let feedbackType = "";
    export let feedbackText = "";
</script>

<div class="feedback__item_second animated">
    <h2 class="feedback__item_header">{feedbackName}</h2>

    <p class="feedback__item_type">
        Вид услуги: <span class="feedback__item_type-text">{feedbackType}</span>
    </p>

    <p class="feedback__item_text">
        {feedbackText}
    </p>

    <hr class="feedback__item_text-line" />

    <p class="feedback__data">
        <span>{feedbackDate}.</span> Отзыв взят с
        <a
            class="feedback__data_link"
            href="https://profi.ru/geo-kaliningrad/profile/BondarevDB/"
            target="_blank">Профи.Ру</a
        >
    </p>
</div>

<style>
    .feedback__data_link {
        color: var(--accent-color);
    }
</style>
