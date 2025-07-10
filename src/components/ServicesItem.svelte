<script>
    import { onMount } from "svelte";
    import Page from "../routes/+page.svelte";

    export let img = "";
    export let text = "";
    export let servicesItemOptions = [];

    let flipped = false;

    function toggleFlip() {
        flipped = !flipped;
    }
</script>

<div class="services__item" on:click={toggleFlip}>
    <div class="services__item_inner {flipped ? 'flipped' : ''}">
        <div class="services__item_inner-front">
            <img class="services__item_img" src={img} alt="images" />
            <p class="services__item_text">{text}</p>
        </div>
        <div class="services__item_inner-back">
            <ul class="services__item_inner-back--container">
                <h3 class="services__item_inner-back--header">
                    Что входит в услугу:
                </h3>
                {#each servicesItemOptions as item}
                    <li class="services__item_inner-back--container">
                        <p class="services__item_inner-back--container_text">
                            {item}
                        </p>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style>
    .services__item {
        padding: 3vw 3vw 3vw 2vw;
        width: 29vw;
        min-height: 30vw;

        display: flex;
        justify-content: center;
        align-items: center;

        box-shadow: 0 0 5px 0 var(--accent-color);
        background-color: var(--secondary-color);

        perspective: 1000px;
        position: relative;

        border-radius: 20px;
        transition: 0.2s;

        overflow: hidden;
    }

    .services__item:hover {
        transform: scale(1.02);
        box-shadow: 0 0 10px 5px var(--accent-color);

        cursor: pointer;
    }

    .services__item_inner {
        width: 100%;
        height: 100%;

        transition: transform 0.6s ease;
        transform-style: preserve-3d;
        position: relative;
    }

    /* Переворот при добавлении класса flipped */
    .services__item_inner.flipped {
        transform: rotateY(180deg);
    }

    .services__item_inner-front,
    .services__item_inner-back {
        position: absolute;
        width: 100%;
        height: 100%;

        backface-visibility: hidden;
        top: 0;
        left: 0;
        border-radius: 20px;

        transition:
            opacity 0.6s ease,
            visibility 0.6s ease;
    }

    /* Лицевая сторона */
    .services__item_inner-front {
        width: 100%;
        height: 100%;

        background: var(--secondary-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    /* При перевороте фронтальная сторона исчезает */
    .services__item_inner.flipped .services__item_inner-front {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
    }

    /* Обратная сторона */
    .services__item_inner-back {
        background: #eee;
        transform: rotateY(180deg);
        display: flex;
        align-items: center;
        justify-content: center;

        opacity: 0;
        visibility: hidden;
        pointer-events: none;
    }

    .services__item_inner-back--container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .services__item_inner-back--header {
        margin-bottom: 2rem;

        text-align: center;
        font-size: 1.75vw;
        font-weight: bold;
    }

    .services__item_inner-back--container_text {
        text-align: center;
        font-size: .75vw;
    }

    /* При перевороте обратная сторона появляется */
    .services__item_inner.flipped .services__item_inner-back {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    .services__item_img {
        width: 10vw;
    }

    .services__item_text {
        margin-top: 3vw;
        font-size: 2vw;
        color: var(--text-color);
    }

    /*Телефонная версия*/
    @media only screen and (max-width: 600px) {
        .services__item {
            padding: 1rem 1rem 1rem 1rem;

            width: 83vw;
            min-height: 15rem;
        }

        .services__item_text {
            font-size: 1.5rem;
            text-align: center;
        }

        .services__item_inner-back--header {
            margin-bottom: 0px;

            text-align: center;
            font-size: 1rem;
            font-weight: bold;
        }

        .services__item_inner-back--container_text {
            text-align: center;
            font-size: 0.75rem;
        }
    }
</style>
