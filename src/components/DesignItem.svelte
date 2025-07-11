<script>
    export let designItemText = "";
    export let designItemProject = "";
</script>

<a href="{designItemProject}" target="_blank" class="design__item">
    <p class="design__item_header">{designItemText}</p>
</a>

<style>
    .design__item {
        width: 100%;
        min-height: 50vh;
        max-height: auto;


        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 1.25vw;
        text-transform: uppercase;
        text-align: center;
        line-height: 2vw;

        border-radius: 20px;
        box-shadow: 0px 0px 5px 0px var(--accent-color);

        background-color: var(--secondary-color);

        transition: .2s;
    }

    .design__item:hover {
        transform: scale(1.02);
        box-shadow: 0 0 10px 5px var(--accent-color);
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