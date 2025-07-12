<script>
    export let designItemBg = "";
    export let designItemText = "";
    export let designItemProject = "";
</script>

<a
    href={designItemProject}
    target="_blank"
    class="design__item animated"
    style="
        background: url('{designItemBg}');
        background-size: cover;
        background-position: center center;
        --design-item-text: '{designItemText}';
    "
>
</a>

<style>
    .design__item {
        position: relative;
        width: 100%;
        min-height: 30vw;
        max-height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25vw;
        text-transform: uppercase;
        line-height: 2vw;
        border-radius: 20px;
        box-shadow: 0px 0px 10px 0px var(--accent-color);
        background-color: var(--secondary-color);
        transition: 0.2s;
    }

    .design__item::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 20px;
        background-color: rgba(80, 85, 87, 0.4);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition: opacity 0.3s ease;
        z-index: 1;
        pointer-events: none;
    }


    .design__item::after {
        content: var(--design-item-text);
        position: absolute;

        text-align: center;
        color: #fff;
        z-index: 2;
    }

    .design__item:hover {
        box-shadow: 0px 0px 10px 5px var(--accent-color);
    }

    @media only screen and (max-width: 600px) {
        .design__item {
            width: 83vw;
            min-height: 45vw;

            font-size: 1.25rem;
            line-height: 5vw;
        }

        .design__item:hover {
            pointer-events: none;
        }

        .design__item::after {
            content: var(--design-item-text);
            position: absolute;

            text-align: center;
            z-index: 2;
        }
    }
</style>
