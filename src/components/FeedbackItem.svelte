<script>
    export let feedbackName = "";
    export let feedbackText = "";
</script>

<div class="feedback__item animated">
    <h2 class="feedback__item_header">{feedbackName}</h2>

    <p class="feedback__item_text">
        {feedbackText}
    </p>

    <hr style="margin-top: 1vw; width: 100%; height: .05vw; background-color: var(--text-color);">

    <p class="feedback__data">
    13 июля 2024. Отзыв взят с <a class="feedback__data_link" href="https://profi.ru/geo-kaliningrad/profile/BondarevDB/" target="_blank">Профи.Ру</a> 
    </p>
</div>

<style>
    .feedback__data_link {
        color: rgb(224, 25, 53);
    }
</style>