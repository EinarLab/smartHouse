<script>
    export let designItemBg = "";
    export let designItemText = "";
    export let designItemProject = "";
</script>

<a 
    href="{designItemProject}" 
    target="_blank" 
    class="design__item" 
    style="background: url('{designItemBg}') no-repeat; background-size: cover; background-position: center center;">
    <p class="design__item_header">{designItemText}</p>
</a>

<style>
    .design__item {
        width: 100%;
        min-height: 30vw;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.25vw;
        text-transform: uppercase;
        text-align: center;
        line-height: 2vw;

        border-radius: 20px;
        box-shadow: 0px 0px 5px 0px var(--accent-color);

        position: relative;

        transition: .2s;
    }

    .design__item:hover {
        transform: scale(1.02);
        box-shadow: 0 0 10px 5px var(--accent-color);
    }

    .design__item::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 20px;

        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        background: rgba(0, 0, 0, 0.3);

        opacity: 1;
        transition: opacity 0.3s ease;
        z-index: 1;
        pointer-events: none;
    }

    .design__item::after {
        content: 'Привет';

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        opacity: 1;
        transition: opacity 0.3s ease;
        z-index: 2;
        pointer-events: none;
        width: 48px;
        height: 48px;
    }

    .design__item_header {
        color: var(--text-color);
    }

    @media only screen and (max-width: 600px) {
        .design__item {
            width: 83vw;
            min-height: 25vh;

            font-size: 1rem;
            line-height: 5vw;
        }

        .design__item:hover {
            pointer-events: none;
        }
    }
</style>